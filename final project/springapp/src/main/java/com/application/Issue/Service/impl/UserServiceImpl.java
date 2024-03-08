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
        return userRepo.save(user);
    }

    public void removeUser(String userId) {
        userRepo.deleteById(userId);
    }

    public List<User> getAllUsers() {
        return (List<User>)userRepo.findAll();
    }

    // public User findUserByName(User user) {
    //      String username = user.getEmail();
    //      return userRepo.findByEmail(username);
    // }

    public User findUser(String userId) {
        return userRepo.findById(userId).orElse(null);
    }

    public User updateUserPassword(User user, String userPassword) {
        user.setPassword(userPassword);
        return userRepo.save(user);
    }

    public User updateLocation(User user, String location) {
        user.setLocation(location);
        return userRepo.save(user);
    }
}
