package com.chartexample.chart.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationOperation;
import org.springframework.data.mongodb.core.aggregation.Fields;
import org.springframework.stereotype.Repository;

import com.chartexample.chart.model.CityCount;
import com.chartexample.chart.model.DensityByCordinates;
import com.chartexample.chart.model.RegistrationCount;

@Repository
public class UserDao{
    
    @Autowired
    MongoTemplate template;

      public List<DensityByCordinates> userDensity() {
        AggregationOperation groupByOperation = Aggregation.group(Fields.fields("lattitude", "longitude"))
                .count().as("count");

        AggregationOperation projectOperation = Aggregation.project()
                .andExclude("_id")
                .andExpression("$_id.lattitude").as("latitude")
                .andExpression("$_id.longitude").as("longitude")
                .and("count").as("count");

        Aggregation aggregation = Aggregation.newAggregation(
                groupByOperation,
                projectOperation
        );

        return template.aggregate(aggregation, "users", DensityByCordinates.class).getMappedResults();
    }

    public List<CityCount> getCityCountByUser() {
        AggregationOperation groupByOperation = Aggregation.group("address.country")
                .count().as("count");

        AggregationOperation projectOperation = Aggregation.project()
                .andExclude("_id")
                .andExpression("$_id").as("city")
                .and("count").as("count");

        Aggregation aggregation = Aggregation.newAggregation(
                groupByOperation,
                projectOperation
        );

        return template.aggregate(aggregation, "users", CityCount.class).getMappedResults();
    }

    public List<RegistrationCount> registrationCountMonthWise() {
        AggregationOperation projectOperation = Aggregation.project()
        .andExpression("{ $year: '$registeredDate' }").as("year")
        .andExpression("{ $month: '$registeredDate' }").as("month");

AggregationOperation groupByOperation = Aggregation.group(Fields.fields("year", "month"))
        .count().as("count");

AggregationOperation projectResultOperation = Aggregation.project()
        .andExclude("_id")
        .andExpression("_id.year").as("year")
        .andExpression("_id.month").as("month")
        .and("count").as("count");

AggregationOperation sortOperation = Aggregation.sort(Sort.by(Sort.Order.asc("year"), Sort.Order.asc("month")));

Aggregation aggregation = Aggregation.newAggregation(
        projectOperation,
        groupByOperation,
        projectResultOperation,
        sortOperation
);

        return template.aggregate(aggregation, "users", RegistrationCount.class).getMappedResults();
    }
}