package com.application.Issue.security.service;

import lombok.RequiredArgsConstructor;

import java.util.HashMap;
import java.util.Map;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.application.Issue.security.auth.AuthenticationRequest;
import com.application.Issue.security.auth.AuthenticationResponse;
import com.application.Issue.security.auth.RegisterRequest;
import com.application.Issue.security.repository.UserRepository;
import com.application.Issue.security.user.Role;
import com.application.Issue.security.user.User;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .userName(request.getUserName())
                .location(request.getLocation().toLowerCase())
                .userPassword(passwordEncoder.encode(request.getUserPassword()))
                .role(Role.PUBLIC)
                .build();

        userRepo.save(user);

        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("Authorities", user.getAuthorities());
        extraClaims.put("location", user.getLocation());
        extraClaims.put("userId", user.getId());

        System.out.println(user.getAuthorities());
        String jwtToken = jwtService.generateToken(extraClaims, user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        System.out.println(request.getUserName());
        authManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUserName(), request.getUserPassword()));
        System.out.println(request);
        
        var user = userRepo.findByUserName(request.getUserName()).orElseThrow();

        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("Authorities", user.getAuthorities());
        extraClaims.put("location", user.getLocation());
        extraClaims.put("userId", user.getId());

        System.out.println(user.getAuthorities());
        String jwtToken = jwtService.generateToken(extraClaims, user);

        return AuthenticationResponse.builder().token(jwtToken).build();
    }
    
}