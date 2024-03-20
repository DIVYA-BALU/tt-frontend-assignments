package com.fullstack.newsplatform.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.fullstack.newsplatform.model.TransactionDetails;
import com.fullstack.newsplatform.model.User;

public interface TransactionRepository extends MongoRepository<TransactionDetails, String>{

	TransactionDetails findByUser(User user);

}
