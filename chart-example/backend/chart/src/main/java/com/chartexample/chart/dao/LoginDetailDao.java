package com.chartexample.chart.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationOperation;
import org.springframework.data.mongodb.core.aggregation.Fields;
import org.springframework.stereotype.Repository;

import com.chartexample.chart.model.HourlyLoginActivity;

@Repository
public class LoginDetailDao {
    
    @Autowired
    MongoTemplate template;

     public List<HourlyLoginActivity> getHourlyLoginActivities() {
        AggregationOperation projectOperation = Aggregation.project()
                .andExpression("{ $hour: '$loginTime' }").as("hour");

        AggregationOperation groupByOperation = Aggregation.group(Fields.fields("hour"))
                .count().as("count");

        AggregationOperation projectResultOperation = Aggregation.project()
                .andExclude("_id")
                .andExpression("_id").as("hour")
                .and("count").as("count");

        AggregationOperation sortOperation = Aggregation.sort(Sort.by(Sort.Order.asc("hour")));

        Aggregation aggregation1 = Aggregation.newAggregation(
            projectOperation,
            groupByOperation
    );
        Aggregation aggregation = Aggregation.newAggregation(
                projectOperation,
                groupByOperation,
                projectResultOperation,
                sortOperation
        );
        System.out.println(template.aggregate(aggregation1, "login_details", String.class).getMappedResults());

        return template.aggregate(aggregation, "login_details", HourlyLoginActivity.class).getMappedResults();
    }
}
