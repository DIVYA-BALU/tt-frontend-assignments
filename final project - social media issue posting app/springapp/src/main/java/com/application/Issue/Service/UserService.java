package com.application.Issue.Service;

import java.util.List;

import com.application.Issue.security.user.User;

public interface UserService {

    public User addUser(User user);
    public void removeUser(String userId);
    public List<User> getAllUsers();
    public User findUserByName(String username);
    public User findUser(String userId);
    public User updateUserPassword(User user, String userPassword);
    public User updateLocation(User user, String location);

}
