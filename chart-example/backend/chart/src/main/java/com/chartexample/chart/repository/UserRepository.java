package com.chartexample.chart.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.chartexample.chart.model.User;

public interface UserRepository extends MongoRepository<User,String>{
    
}
