package com.application.Issue.Service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.Issue.Service.UserService;
import com.application.Issue.security.repository.UserRepository;
import com.application.Issue.security.user.User;

@Service
public class UserServiceImpl implements UserService {
    
    @Autowired
    public UserRepository userRepo;

    public User addUser(User user) {
        // if (userRepo.existsByEmail(user.getEmail())) {
        //     throw new DataIntegrityViolationException("User already exists");
        // }
        return userRepo.save(user);
    }

    public void removeUser(String userId) {
        userRepo.deleteById(userId);
    }

    public List<User> getAllUsers() {
        return (List<User>)userRepo.findAll();
    }

    //  String username = user.getEmail();
    //  return userRepo.findByEmail(username);
    // public User findUserByName(String username) {
    //     return userRepo.findByUserName(username);
    // }

    public User findUser(String userId) {
        return userRepo.findById(userId).orElse(null);
    }

    public User updateUserPassword(User user, String userPassword) {
        user.setUserPassword(userPassword);
        return userRepo.save(user);
    }

    public User updateLocation(User user, String location) {
        user.setLocation(location);
        return userRepo.save(user);
    }
}
