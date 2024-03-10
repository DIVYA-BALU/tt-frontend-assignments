package com.example.BloodBankManagement.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.BloodBankManagement.model.AuthenticationRequest;
import com.example.BloodBankManagement.model.AuthenticationResponse;
import com.example.BloodBankManagement.model.RegisterRequest;
import com.example.BloodBankManagement.model.Role;
import com.example.BloodBankManagement.model.User;
import com.example.BloodBankManagement.repository.UserRepository;
import com.example.BloodBankManagement.service.AuthenticationService;
import com.example.BloodBankManagement.service.JwtService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public ResponseEntity<AuthenticationResponse> register(RegisterRequest request) throws Exception {
        User user = User.builder()
                .email(request.getEmail())
                .name(request.getName())
                .bloodGroup(request.getBloodGroup())
                .gender(request.getGender())
                .age(request.getAge())
                .mobileNumber(request.getMobileNumber())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();



        System.out.println(user);

        User savedUser = new User();
        // try {
            if (userRepository.existsByEmail(user.getEmail())) {
                throw new Exception("Username or email already exists.");
            }
                // throw new Exception("Username or email already exists.");
            // }
            savedUser = userRepository.save(user);
        // } catch (Exception e) {
            // return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        // }
        String jwtToken = jwtService.generateToken(savedUser);

        return new ResponseEntity<>(AuthenticationResponse.builder()
                .token(jwtToken)
                .build(), HttpStatus.OK);
    }

    public ResponseEntity<AuthenticationResponse> authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()));

        User user = userRepository.findByEmail(request.getEmail());

                Map<String, Object> extraClaims = new HashMap<>();
                extraClaims.put("Authorities", user.getAuthorities());
        String jwtToken = jwtService.generateToken(user);
        return new ResponseEntity<>(AuthenticationResponse.builder()
                .token(jwtToken)
                .build(), HttpStatus.OK);
    }
}
