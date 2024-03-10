package com.example.BloodBankManagement.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.BloodBankManagement.model.User;
import java.util.List;



public interface UserRepository extends MongoRepository<User, String>{

    public User findByEmail(String email);
    public boolean existsByEmail(String email);
    public void deleteByEmail(String email);
}
