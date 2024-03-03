package com.project.storeadministration.repository;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.stereotype.Repository;

@Repository
public class CustomInvestmentRepository {
  @Autowired
  private MongoTemplate mongoTemplate;

  public int getTotalInvestment() {
    Aggregation aggregation = Aggregation.newAggregation(
        Aggregation.group().sum("amount").as("totalInvestment"));

    AggregationResults<Document> results = mongoTemplate.aggregate(aggregation, "investments", Document.class);

    if (!results.getMappedResults().isEmpty()) {
      Document aggregationResult = results.getMappedResults().get(0);
      return aggregationResult.getInteger("totalInvestment");
    } else {
      return 0;
    }
  }
}
