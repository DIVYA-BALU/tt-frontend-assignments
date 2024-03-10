package com.example.BloodBankManagement.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.BloodBankManagement.model.BloodDetails;

public interface BloodDetailsRepository extends MongoRepository<BloodDetails, String>{

    BloodDetails findByBloodGroup(String bloodGroup);

    BloodDetails findByEmail(String email);
    
}
