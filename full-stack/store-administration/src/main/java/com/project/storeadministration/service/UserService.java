package com.project.storeadministration.service;

import org.springframework.http.ResponseEntity;

import com.project.storeadministration.dto.EnrollUserRequest;
import com.project.storeadministration.dto.LoginRequest;
import com.project.storeadministration.dto.LoginResponse;
import com.project.storeadministration.exception.CustomException;

public interface UserService {

  ResponseEntity<?> enrollUser(EnrollUserRequest request, boolean signUp) throws CustomException;

  LoginResponse validateUser(LoginRequest loginRequest);
}
