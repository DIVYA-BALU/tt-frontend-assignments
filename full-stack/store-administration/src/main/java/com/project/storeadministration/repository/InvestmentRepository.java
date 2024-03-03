package com.project.storeadministration.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.project.storeadministration.model.Investment;

public interface InvestmentRepository extends MongoRepository<Investment, String>{
  
}
