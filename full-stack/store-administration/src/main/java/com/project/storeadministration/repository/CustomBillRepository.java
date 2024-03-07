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
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.ArithmeticOperators;
import org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Multiply;
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

    List<IncomeStatement> IncomeStatements = results.getMappedResults();

    int pageSize = pageable.getPageSize();
    int currentPage = pageable.getPageNumber();
    int startItem = currentPage * pageSize;
    List<IncomeStatement> paginatedList;

    for (IncomeStatement statement : IncomeStatements) {
      Section section = sectionRepository.findById(statement.getSectionId()).orElse(null);
      if (section != null) {
        statement.setSectionName(section.getName());
      }
    }

    if (IncomeStatements.size() < startItem) {
      paginatedList = Collections.emptyList();
    } else {
      int toIndex = Math.min(startItem + pageSize, IncomeStatements.size());
      paginatedList = IncomeStatements.subList(startItem, toIndex);
    }

    return new PageImpl<>(paginatedList, PageRequest.of(currentPage, pageSize), IncomeStatements.size());
  }

  public List<IncomeStatement> getSectionWiseIncomeStatementForBranch(String branchId, LocalDate date) {
    Aggregation aggregation = Aggregation.newAggregation(
      Aggregation.match(Criteria.where("products.branch").is(branchId)),
      Aggregation.unwind("billItems"),
      Aggregation.lookup("products", "billItems.product", "_id", "products"),
      Aggregation.unwind("products"),
      Aggregation.group("products.branch", "products.section")
            .first("products.branch").as("branchId")
            .first("products.branch.name").as("branchName")
            .first("products.section").as("sectionId")
            .sum(Multiply.valueOf("$billItems.quantity").multiplyBy("$products.price")).as("revenue")
            .sum(Multiply.valueOf("$billItems.quantity").multiplyBy("$products.cogs")).as("cogs"),
            Aggregation.project()
            .andExpression("_id.branchId").as("branchId")
            .andExpression("branchName").as("branchName")
            .andExpression("_id.sectionId").as("sectionId")
            .and("revenue").as("revenue")
            .and("cogs").as("cogs")
    );

    AggregationResults<IncomeStatement> results = mongoTemplate.aggregate(aggregation, "bills", IncomeStatement.class);
    return results.getMappedResults();
}

}
