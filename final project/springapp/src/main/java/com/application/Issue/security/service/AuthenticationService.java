package com.application.Issue.security.service;

import lombok.RequiredArgsConstructor;
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
                .email(request.getEmail())
                .location(request.getLocation())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.PUBLIC)
                .build();

        userRepo.save(user);

        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authManager.authenticate(
               new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );
        System.out.println(request);
        var user = userRepo.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder().token(jwtToken).build();
    }
}