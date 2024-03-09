package com.project.storeadministration.repository;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.ArithmeticOperators;
import org.springframework.data.mongodb.core.aggregation.MatchOperation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Repository;

import com.project.storeadministration.dto.IncomeStatement;
import com.project.storeadministration.model.Section;

@Repository
public class CustomBillRepository {
  @Autowired
  private MongoTemplate mongoTemplate;

  @Autowired
  private BranchRepository branchRepository;

  @Autowired
  private SectionRepository sectionRepository;

  public int getRevenue() {
    Aggregation aggregation = Aggregation.newAggregation(
        Aggregation.unwind("billItems"),
        Aggregation.lookup("products", "billItems.product", "_id", "products"),
        Aggregation.unwind("products"),
        Aggregation.project().andExpression("billItems.quantity * products.price").as("totalPrice"),
        Aggregation.group().sum("totalPrice").as("totalRevenue"));

    AggregationResults<Document> results = mongoTemplate.aggregate(aggregation, "bills", Document.class);

    if (!Objects.requireNonNull(results.getMappedResults()).isEmpty()) {
      Document aggregationResult = results.getMappedResults().get(0);
      return aggregationResult.getInteger("totalRevenue");
    } else {
      return 0;
    }
  }

  public Page<IncomeStatement> getBranchWiseIncomeStatement(PageRequest pageable) {
    Aggregation aggregation = Aggregation.newAggregation(
        Aggregation.unwind("billItems"),
        Aggregation.lookup("products", "billItems.product", "_id", "products"),
        Aggregation.unwind("products"),
        Aggregation.group("products.branch")
            .first("products.branch").as("branchId")
            .first("products.branch.name").as("branchName")
            .sum(ArithmeticOperators.Multiply.valueOf("$billItems.quantity").multiplyBy("$products.price"))
            .as("revenue")
            .sum(ArithmeticOperators.Multiply.valueOf("$billItems.quantity").multiplyBy("$products.cogs")).as("cogs"));

    AggregationResults<IncomeStatement> results = mongoTemplate.aggregate(aggregation, "bills", IncomeStatement.class);
    List<IncomeStatement> incomeStatements = results.getMappedResults();

    int pageSize = pageable.getPageSize();
    int currentPage = pageable.getPageNumber();
    int startItem = currentPage * pageSize;
    List<IncomeStatement> paginatedList;

    for (IncomeStatement incomeStatement : incomeStatements) {
      incomeStatement.setBranchName(branchRepository.findBy_id(incomeStatement.getBranchId()).get().getName());
    }
    if (incomeStatements.size() < startItem) {
      paginatedList = Collections.emptyList();
    } else {
      int toIndex = Math.min(startItem + pageSize, incomeStatements.size());
      paginatedList = incomeStatements.subList(startItem, toIndex);
    }

    return new PageImpl<>(paginatedList, PageRequest.of(currentPage, pageSize), incomeStatements.size());
  }

  public Page<IncomeStatement> getSectionWiseIncomeStatement(PageRequest pageable) {
    Aggregation aggregation = Aggregation.newAggregation(
        Aggregation.unwind("billItems"),
        Aggregation.lookup("products", "billItems.product", "_id", "products"),
        Aggregation.unwind("products"),
        Aggregation.group("products.section")
            .first("products.section").as("sectionId")
            .sum(ArithmeticOperators.Multiply.valueOf("$billItems.quantity").multiplyBy("$products.price"))
            .as("revenue")
            .sum(ArithmeticOperators.Multiply.valueOf("$billItems.quantity").multiplyBy("$products.cogs")).as("cogs"));

    AggregationResults<IncomeStatement> results = mongoTemplate.aggregate(aggregation, "bills",
        IncomeStatement.class);

    List<IncomeStatement> incomeStatements = results.getMappedResults();

    int pageSize = pageable.getPageSize();
    int currentPage = pageable.getPageNumber();
    int startItem = currentPage * pageSize;
    List<IncomeStatement> paginatedList;

    for (IncomeStatement statement : incomeStatements) {
      Section section = sectionRepository.findById(statement.getSectionId()).orElse(null);
      if (section != null) {
        statement.setSectionName(section.getName());
      }
    }

    if (incomeStatements.size() < startItem) {
      paginatedList = Collections.emptyList();
    } else {
      int toIndex = Math.min(startItem + pageSize, incomeStatements.size());
      paginatedList = incomeStatements.subList(startItem, toIndex);
    }

    return new PageImpl<>(paginatedList, PageRequest.of(currentPage, pageSize), incomeStatements.size());
  }

  public Page<IncomeStatement> getSectionWiseIncomeStatementForBranch(Pageable pageable, String branchId) {
    Aggregation aggregation = Aggregation.newAggregation(
        Aggregation.unwind("billItems"),
        Aggregation.match(Criteria.where("branchId").is(branchId)),
        Aggregation.lookup("products", "billItems.product", "_id", "products"),
        Aggregation.unwind("products"),
        Aggregation.group("products.branch", "products.section")
            .first("products.branch._id").as("branchId")
            .first("products.branch.name").as("branchName")
            .first("products.section").as("sectionId")
            .sum(
                ArithmeticOperators.Multiply.valueOf("$billItems.quantity").multiplyBy("$products.price"))
            .as("revenue")
            .sum(
                ArithmeticOperators.Multiply.valueOf("$billItems.quantity").multiplyBy("$products.cogs"))
            .as("cogs"));

    AggregationResults<IncomeStatement> results = mongoTemplate.aggregate(aggregation, "bills", IncomeStatement.class);
    List<IncomeStatement> incomeStatements = results.getMappedResults();

    int pageSize = pageable.getPageSize();
    int currentPage = pageable.getPageNumber();
    int startItem = currentPage * pageSize;
    List<IncomeStatement> pageIncomeStatements;

    if (incomeStatements.size() < startItem) {
      pageIncomeStatements = Collections.emptyList();
    } else {
      int toIndex = Math.min(startItem + pageSize, incomeStatements.size());
      pageIncomeStatements = incomeStatements.subList(startItem, toIndex);
    }

    for (IncomeStatement statement : pageIncomeStatements) {
      Section section = sectionRepository.findById(statement.getSectionId()).orElse(null);
      if (section != null) {
        statement.setSectionName(section.getName());
      }
    }

    return new PageImpl<>(pageIncomeStatements, pageable, incomeStatements.size());
  }

  public Page<IncomeStatement> getDateWiseIncomeStatementForSection(Pageable pageable, String branchId,
      String sectionId) {
    Aggregation aggregation = Aggregation.newAggregation(
        Aggregation.match(Criteria.where("branchId").is(branchId)
            .and("sectionId").is(sectionId)),
        Aggregation.unwind("billItems"),
        Aggregation.group("billItems.date")
            .first("billItems.date").as("date")
            .sum(
                ArithmeticOperators.Multiply.valueOf("$billItems.quantity").multiplyBy("$billItems.product.price"))
            .as("revenue")
            .sum(
                ArithmeticOperators.Multiply.valueOf("$billItems.quantity").multiplyBy("$billItems.product.cogs"))
            .as("cogs"),
        Aggregation.sort(Sort.by(Sort.Direction.DESC, "date"))
    );

    AggregationResults<IncomeStatement> results = mongoTemplate.aggregate(aggregation, "bills", IncomeStatement.class);
    List<IncomeStatement> incomeStatements = results.getMappedResults();

    int pageSize = pageable.getPageSize();
    int currentPage = pageable.getPageNumber();
    int startItem = currentPage * pageSize;
    List<IncomeStatement> pageIncomeStatements;

    if (incomeStatements.size() < startItem) {
      pageIncomeStatements = Collections.emptyList();
    } else {
      int toIndex = Math.min(startItem + pageSize, incomeStatements.size());
      pageIncomeStatements = incomeStatements.subList(startItem, toIndex);
    }

    return new PageImpl<>(pageIncomeStatements, pageable, incomeStatements.size());
  }
}