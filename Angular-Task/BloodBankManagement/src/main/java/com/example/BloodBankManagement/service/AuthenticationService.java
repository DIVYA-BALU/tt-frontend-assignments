package com.example.BloodBankManagement.service;

import org.springframework.http.ResponseEntity;

import com.example.BloodBankManagement.model.AuthenticationRequest;
import com.example.BloodBankManagement.model.AuthenticationResponse;
import com.example.BloodBankManagement.model.RegisterRequest;

public interface AuthenticationService {
    ResponseEntity<AuthenticationResponse> register(RegisterRequest request) throws Exception;
 
    ResponseEntity<AuthenticationResponse> authenticate(AuthenticationRequest request);
}
