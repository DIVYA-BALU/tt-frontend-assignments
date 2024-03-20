package com.fullstack.newsplatform.service;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.fullstack.newsplatform.dto.UserDTO;
import com.fullstack.newsplatform.exception.UserEmailAlreadyExistsException;
import com.fullstack.newsplatform.exception.UserNotFoundException;
import com.fullstack.newsplatform.model.User;

public interface UserService {

	Page<User> getAllUsers(Pageable pageable) throws UserNotFoundException;

	boolean existsByEmail(String email);

	User getUser(String userId) throws UserNotFoundException;

	String updateUser(User u) throws UserNotFoundException;

	String deleteUser(String token) throws UserNotFoundException;

	String changePassword(String email, String newPassword) throws UserNotFoundException;

	String addUser(UserDTO user) throws UserEmailAlreadyExistsException;

}
