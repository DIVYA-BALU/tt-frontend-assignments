package com.example.charts.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationOperation;
import org.springframework.data.mongodb.core.aggregation.Fields;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import com.example.charts.dto.RegistrationMonthCount;
import com.example.charts.dto.UserDensity;
import com.example.charts.dto.CityCount;

@Repository
public class CustomUserDetailsRepository {

        @Autowired
        private MongoTemplate mongoTemplate;

        public List<RegistrationMonthCount> getMonthWiseRegistrationCount() {
                Aggregation aggregation = Aggregation.newAggregation(
                                Aggregation.project()
                                                .andExpression("{ $year: '$registeredDate' }").as("year")
                                                .andExpression("{ $month: '$registeredDate' }").as("month"),
                                // Aggregation.Sort(Sort.by(Order.asc,))
                                Aggregation.group("year", "month").count().as("count"),
                                Aggregation.project().andExclude("_id").andExpression("_id.month").as("month")
                                                .andExpression("_id.year").as("year")
                                                .and("count").as("count"),
                                Aggregation.sort(Sort.by(Sort.Order.asc("year"), Sort.Order.asc("month"))));
                List<RegistrationMonthCount> results = mongoTemplate
                                .aggregate(aggregation, "userDetails", RegistrationMonthCount.class).getMappedResults();
                return results;
        }

        public List<CityCount> getCountOfCities() {
                AggregationOperation groupByOperation = Aggregation.group("city")
                                .count().as("count");

                AggregationOperation projectOperation = Aggregation.project()
                                .andExclude("_id")
                                .andExpression("_id").as("city")
                                .and("count").as("count");

                Aggregation aggregation = Aggregation.newAggregation(
                                groupByOperation,
                                projectOperation);

                return mongoTemplate.aggregate(aggregation, "userDetails", CityCount.class).getMappedResults();
        }

        public List<UserDensity> getUserDensity() {
                AggregationOperation groupByOperation = Aggregation.group(Fields.fields("latitude", "longitude"))
                                .count().as("count");

                AggregationOperation projectOperation = Aggregation.project()
                                .andExclude("_id")
                                .andExpression("$_id.latitude").as("latitude")
                                .andExpression("$_id.longitude").as("longitude")
                                .and("count").as("count");

                Aggregation aggregation = Aggregation.newAggregation(
                                groupByOperation,
                                projectOperation);

                return mongoTemplate.aggregate(aggregation, "userDetails", UserDensity.class).getMappedResults();
        }

}