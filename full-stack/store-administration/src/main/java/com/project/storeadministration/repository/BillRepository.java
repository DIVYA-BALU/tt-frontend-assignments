package com.project.storeadministration.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.project.storeadministration.model.Bill;

public interface BillRepository extends MongoRepository<Bill, String>{
  
}
