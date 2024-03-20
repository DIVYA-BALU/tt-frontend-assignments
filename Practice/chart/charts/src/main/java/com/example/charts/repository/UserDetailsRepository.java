package com.example.charts.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.charts.model.UserDetails;

public interface UserDetailsRepository extends MongoRepository<UserDetails, String> {

}