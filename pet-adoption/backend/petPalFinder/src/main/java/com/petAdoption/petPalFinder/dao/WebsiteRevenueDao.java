package com.petAdoption.petPalFinder.dao;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationOperation;
import org.springframework.data.mongodb.core.aggregation.Fields;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Repository;

import com.petAdoption.petPalFinder.dto.MonthWiseRevanue;
import com.petAdoption.petPalFinder.dto.WebsiteRevenueDto;
import com.petAdoption.petPalFinder.dto.YearWiseRevenue;
import com.petAdoption.petPalFinder.models.Location;
import com.petAdoption.petPalFinder.models.PetPost;

@Repository
public class WebsiteRevenueDao {
     @Autowired
    MongoTemplate template;

    public List<MonthWiseRevanue> monthRevenue(Integer year){
         AggregationOperation projectOperation = Aggregation.project()
                .andExpression("{ $month: '$date' }").as("month")
                .andExpression("{ $year: '$date' }").as("year")
                .and("amount").as("amount");

        AggregationOperation matchOperation = Aggregation.match(Criteria.where("year").is(year));

        AggregationOperation groupByOperation = Aggregation.group(Fields.fields("year", "month"))
                .sum("amount").as("revenue");

        AggregationOperation projectResultOperation = Aggregation.project()
                .andExclude("_id")
                .andExpression("_id.month").as("month")
                .and("revenue").as("revenue");

        AggregationOperation sortOperation = Aggregation.sort(Sort.by(Sort.Order.asc("year"), Sort.Order.asc("month")));

        Aggregation aggregation = Aggregation.newAggregation(
                projectOperation,
                matchOperation,
                groupByOperation,
                projectResultOperation,
                sortOperation
        );

        return template.aggregate(aggregation, "website_revenues", MonthWiseRevanue.class).getMappedResults();
    }


    public List<YearWiseRevenue> yearRevenue(){
         AggregationOperation projectOperation = Aggregation.project()
                .andExpression("{ $year: '$date' }").as("year")
                .and("amount").as("amount");


        AggregationOperation groupByOperation = Aggregation.group(Fields.fields("year"))
                .sum("amount").as("revenue");

        AggregationOperation projectResultOperation = Aggregation.project()
                .andExclude("_id")
                .andExpression("_id").as("year")
                .and("revenue").as("revenue");

        AggregationOperation sortOperation = Aggregation.sort(Sort.by(Sort.Order.asc("year")));

        Aggregation aggregation = Aggregation.newAggregation(
                projectOperation,
                groupByOperation,
                projectResultOperation,
                sortOperation
        );

        return template.aggregate(aggregation, "website_revenues", YearWiseRevenue.class).getMappedResults();
    }
}
