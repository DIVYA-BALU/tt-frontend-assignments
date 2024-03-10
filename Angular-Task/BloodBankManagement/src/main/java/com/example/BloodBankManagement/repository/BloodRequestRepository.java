package com.example.BloodBankManagement.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.BloodBankManagement.model.BloodRequest;

public interface BloodRequestRepository extends MongoRepository<BloodRequest, String>{

    Optional<BloodRequest> findByRequestId(String requestId);

    List<BloodRequest> findAllByEmail(String email);
    
}
