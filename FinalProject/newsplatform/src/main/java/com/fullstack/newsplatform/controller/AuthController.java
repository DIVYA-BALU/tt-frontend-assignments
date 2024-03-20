package com.fullstack.newsplatform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.newsplatform.dto.LoginDTO;
import com.fullstack.newsplatform.dto.ResponseDTO;
import com.fullstack.newsplatform.dto.SignupDTO;
import com.fullstack.newsplatform.exception.UserEmailAlreadyExistsException;
import com.fullstack.newsplatform.exception.UserNotFoundException;
import com.fullstack.newsplatform.jwtService.JwtService;
import com.fullstack.newsplatform.service.AuthService;

@RestController
public class AuthController {

	@Autowired
	JwtService jwtService;

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	AuthService service;

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/signup")
	public ResponseDTO signup(@RequestBody SignupDTO signupDTO) throws UserEmailAlreadyExistsException {
		System.out.println(signupDTO);
		return service.signup(signupDTO);	
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/login")
	public ResponseDTO login(@RequestBody LoginDTO loginDTO) throws UserNotFoundException {
		System.out.println(loginDTO);
		return service.login(loginDTO);
	}

}
