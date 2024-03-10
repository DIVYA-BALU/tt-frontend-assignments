package com.example.BloodBankManagement.service.impl;

import java.util.List;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.BloodBankManagement.exception.ResourceNotFoundException;
import com.example.BloodBankManagement.model.Role;
import com.example.BloodBankManagement.model.User;
import com.example.BloodBankManagement.repository.UserRepository;
import com.example.BloodBankManagement.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(String id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public User createUser(User user) {
        try {
            return userRepository.save(user);
        } catch (DataIntegrityViolationException e) {
            // Handle data integrity violations (e.g., unique constraints)
            throw new RuntimeException("User with email " + user.getEmail() + " already exists.");
        } catch (Exception e) {
            // Handle other unexpected errors
            throw new RuntimeException("Failed to create user: " + e.getMessage());
        }
    }

    @Override
    public User updateUser(String email, User updatedUser) {
        try {
            User existingUser = userRepository.findByEmail(email);
            System.out.println(existingUser);
            if (existingUser != null) {
                // String role = existingUser.getRole().name();
                existingUser.setName(updatedUser.getName());
                existingUser.setBloodGroup(updatedUser.getBloodGroup());
                existingUser.setAge(updatedUser.getAge());
                existingUser.setGender(updatedUser.getGender());
                existingUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
                existingUser.setMobileNumber(updatedUser.getMobileNumber());
                userRepository.save(existingUser);
                return userRepository.save(existingUser);
            } else {
                return null;
            }

        } catch (Exception e) {
            throw new RuntimeException("Error occurred while updating the user: " + e.getMessage());
        }
    }

    @Override
    public boolean deleteUser(String email) {
        if (userRepository.existsByEmail(email)) {
            userRepository.deleteByEmail(email);
            return true;
        } else {
            throw new ResourceNotFoundException("User", "email", email);
        }
    }
}