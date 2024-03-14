package com.chartexample.chart.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.chartexample.chart.model.LoginDetail;

public interface LoginDetailRepository extends MongoRepository<LoginDetail,String> {
    
}
