package com.example.BloodBankManagement.service;

import java.util.List;

import com.example.BloodBankManagement.exception.ResourceNotFoundException;
import com.example.BloodBankManagement.model.User;

public interface UserService {
    List<User> getAllUsers() throws ResourceNotFoundException;
    User getUserById(String id) throws ResourceNotFoundException;
    User getUserByEmail(String email) throws ResourceNotFoundException;
    User createUser(User user) throws RuntimeException, ResourceNotFoundException;
    User updateUser(String email, User updateUser) throws RuntimeException, ResourceNotFoundException;
    boolean deleteUser(String email) throws ResourceNotFoundException;
}