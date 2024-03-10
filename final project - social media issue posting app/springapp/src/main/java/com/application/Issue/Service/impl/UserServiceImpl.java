package com.application.Issue.Service.impl;

import java.util.List;
import java.util.Optional;

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

    public User findUser(String userId) {
        return userRepo.findById(userId).orElse(null);
    }

    public User findUserByName(String userName) {
        Optional<User> userOptional = userRepo.findByUserName(userName);
        return userOptional.orElse(null);
    }

    public User updateLocation(User user, String location) {
        user.setLocation(location);
        return userRepo.save(user);
    }

    @Override
    public User updateUserPassword(User user, String newPassword) {
        user.setUserPassword(newPassword);
        return userRepo.save(user);
    }


}
