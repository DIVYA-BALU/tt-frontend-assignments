package com.application.Issue.security.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.Issue.Service.UserService;
import com.application.Issue.security.auth.AuthenticationRequest;
import com.application.Issue.security.auth.AuthenticationResponse;
import com.application.Issue.security.auth.ForgotPasswordRequest;
import com.application.Issue.security.auth.RegisterRequest;
import com.application.Issue.security.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authService;
    
    @Autowired
    public UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        var response = authService.register(request);
        if (request.isMfaEnabled()) 
            return ResponseEntity.ok(response);
        
        return ResponseEntity.accepted().build();
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return new ResponseEntity<>(authService.authenticate(request), HttpStatus.OK);
    }

    @PutMapping("/passUpdate")
    public ResponseEntity<?> updateUserPassword(@RequestBody ForgotPasswordRequest request) {
        try {
            authService.updateUserPassword(request);
            return ResponseEntity.ok().build();
        } 
        catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to update password: " + e.getMessage());
        }
    }

}