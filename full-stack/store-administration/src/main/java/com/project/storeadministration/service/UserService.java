package com.project.storeadministration.service;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;

import com.project.storeadministration.dto.EnrollUserRequest;
import com.project.storeadministration.dto.LoginRequest;
import com.project.storeadministration.dto.LoginResponse;
import com.project.storeadministration.exception.CustomException;
import com.project.storeadministration.model.User;

public interface UserService {

  ResponseEntity<?> enrollUser(EnrollUserRequest request, boolean signUp) throws CustomException;

  LoginResponse validateUser(LoginRequest loginRequest);

  User updateSection(String userId, String sectionId);

  Page<User> getUsers(int pageNo, int pageSize, String branchId, String searchByName);

  User updateUser(User user);
}
