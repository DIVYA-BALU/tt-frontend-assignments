package com.petAdoption.petPalFinder.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.petAdoption.petPalFinder.dto.LoginRequest;
import com.petAdoption.petPalFinder.dto.Registration;
import com.petAdoption.petPalFinder.dto.Token;
import com.petAdoption.petPalFinder.services.AuthenticationService;

import org.springframework.web.bind.annotation.RequestMapping;



@Controller
@CrossOrigin
@RequestMapping(path = "auth")
public class AuthenticationController {
    


    @Autowired
    AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<Token> register(@RequestBody Registration request) {
          return ResponseEntity.ok(authenticationService.register(request));
    }
    // @PostMapping("/register/admin")
    // public ResponseEntity<Token> admin(@RequestBody Registration request) {
    //     System.out.println(request);
    //       return ResponseEntity.ok(authenticationService.admin(request));
    // }
 
    @PostMapping
    public ResponseEntity<Token> postLogin(@RequestBody LoginRequest request) {
      
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }
}
