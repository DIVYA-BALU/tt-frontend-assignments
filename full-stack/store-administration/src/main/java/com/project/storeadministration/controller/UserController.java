package com.project.storeadministration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.storeadministration.dto.EnrollUserRequest;
import com.project.storeadministration.dto.LoginRequest;
import com.project.storeadministration.dto.LoginResponse;
import com.project.storeadministration.exception.CustomException;
import com.project.storeadministration.service.UserService;


@RestController
@RequestMapping("user")
public class UserController {

  @Autowired
  private UserService userService;
  
  @GetMapping
  public String hello(){
    return "Hello";
  }

  @GetMapping("login")
  public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
      return new ResponseEntity<LoginResponse>(userService.validateUser(loginRequest),HttpStatus.OK);
  }
  
  @PostMapping
  public ResponseEntity<?> enrollUser(@RequestBody EnrollUserRequest request, @RequestParam(required = false) boolean signUp) throws CustomException {
    return userService.enrollUser(request ,signUp);
  }
}
