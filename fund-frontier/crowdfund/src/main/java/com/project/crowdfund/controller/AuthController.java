package com.project.crowdfund.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.crowdfund.dto.LoginRequest;
import com.project.crowdfund.dto.LoginResponse;
import com.project.crowdfund.dto.RequestDto;
import com.project.crowdfund.model.Users;
import com.project.crowdfund.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<Users> signup(@RequestBody RequestDto request) {
        return ResponseEntity.ok(userService.save(request));
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest user) {
        return ResponseEntity.ok(userService.login(user));
    }

}
