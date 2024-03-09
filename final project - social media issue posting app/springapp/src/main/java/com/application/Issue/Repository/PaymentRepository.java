package com.application.Issue.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.application.Issue.Model.Payment;

public interface PaymentRepository extends MongoRepository<Payment, String> {
    
}
