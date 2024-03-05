package com.project.storeadministration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.storeadministration.dto.EnrollUserRequest;
import com.project.storeadministration.dto.LoginRequest;
import com.project.storeadministration.dto.LoginResponse;
import com.project.storeadministration.exception.CustomException;
import com.project.storeadministration.model.User;
import com.project.storeadministration.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

  @Autowired
  private UserService userService;

  @GetMapping("/hello")
  public String hello() {
    return "Hello";
  }

  @PostMapping("/login")
  public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
    return new ResponseEntity<LoginResponse>(userService.validateUser(loginRequest), HttpStatus.OK);
  }

  @PostMapping
  public ResponseEntity<?> enrollUser(@RequestBody EnrollUserRequest request,
      @RequestParam(required = false) boolean signUp) throws CustomException {
    return userService.enrollUser(request, signUp);
  }

  @PatchMapping("/{userId}/updateSection/{sectionId}")
  public ResponseEntity<User> updateSection(@PathVariable String userId, @PathVariable String sectionId) {
    return new ResponseEntity<User>(userService.updateSection(userId, sectionId), HttpStatus.OK);
  }

  @GetMapping
  public ResponseEntity<Page<User>> getUsers(@RequestParam(defaultValue = "0") int pageNo,
      @RequestParam(defaultValue = "10") int pageSize, @RequestParam String branchId)
      throws CustomException {
    return new ResponseEntity<Page<User>>(
        userService.getUsers(pageNo, pageSize, branchId), HttpStatus.OK);
  }
}
