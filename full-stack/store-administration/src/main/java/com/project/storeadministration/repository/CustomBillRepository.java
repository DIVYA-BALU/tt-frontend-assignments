package com.project.storeadministration.repository;

import java.util.Objects;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.stereotype.Repository;

import com.project.storeadministration.dto.IncomeStatement;

@Repository
public class CustomBillRepository {
  @Autowired
  private MongoTemplate mongoTemplate;

  public int getRevenue() {
    Aggregation aggregation = Aggregation.newAggregation(
        Aggregation.unwind("billItems"),
        Aggregation.lookup("products", "billItems.product", "_id", "products"),
        Aggregation.unwind("products"),
        Aggregation.project().andExpression("billItems.quantity * products.price").as("totalPrice"),
        Aggregation.group().sum("totalPrice").as("totalRevenue")
    );

    AggregationResults<Document> results = mongoTemplate.aggregate(aggregation, "bills", Document.class);

    if (!Objects.requireNonNull(results.getMappedResults()).isEmpty()) {
        Document aggregationResult = results.getMappedResults().get(0);
        return aggregationResult.getInteger("totalRevenue");
    } else {
      return 0;
    }
  }
  
  public Page<IncomeStatement> getBranchWiseIncomeStatement(PageRequest pageable) {
    //https://chat.openai.com/share/10967b1f-e7c6-4a49-93ce-a898c754e9e0
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getBranchWiseIncomeStatement'");
  }

}


