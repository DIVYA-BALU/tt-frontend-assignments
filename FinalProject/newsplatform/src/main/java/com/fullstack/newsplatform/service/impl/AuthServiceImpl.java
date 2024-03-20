package com.fullstack.newsplatform.service.impl;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fullstack.newsplatform.dto.LoginDTO;
import com.fullstack.newsplatform.dto.ResponseDTO;
import com.fullstack.newsplatform.dto.SignupDTO;
import com.fullstack.newsplatform.exception.UserEmailAlreadyExistsException;
import com.fullstack.newsplatform.exception.UserNotFoundException;
import com.fullstack.newsplatform.jwtService.JwtService;
import com.fullstack.newsplatform.model.Role;
import com.fullstack.newsplatform.model.RolePermission;
import com.fullstack.newsplatform.model.User;
import com.fullstack.newsplatform.repository.RolePermissionRepository;
import com.fullstack.newsplatform.repository.RoleRepository;
import com.fullstack.newsplatform.repository.UserRepository;
import com.fullstack.newsplatform.service.AuthService;
import com.fullstack.newsplatform.service.UserService;

@Service
public class AuthServiceImpl implements AuthService {

	@Autowired
	PasswordEncoder passwordEncoder;

	@Autowired
	UserRepository repository;

	@Autowired
	JwtService jwtService;

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserService service;
	
	@Autowired
	RoleRepository repo;
	
	@Autowired
	RolePermissionRepository repo1;

	public ResponseDTO signup(SignupDTO signupDTO) throws UserEmailAlreadyExistsException {

		boolean check1 = service.existsByEmail(signupDTO.getEmail());

		if (check1) {
			throw new UserEmailAlreadyExistsException();
			
		} else {
			System.out.println("came");
			
			Role role = repo.findByroleName("USER");
			List<RolePermission> permissions = repo1.findByRole(role);
			
			LocalDateTime today = LocalDateTime.now();
			Date utcDate = Date.from(today.atZone(ZoneId.of("UTC")).toInstant());
			
			User user = User.builder().firstName(signupDTO.getFirstName()).lastName("").email(signupDTO.getEmail()).phoneNo("")
					.occupation("").location("").createdDate(utcDate)
					.password(passwordEncoder.encode(signupDTO.getPassword())).suscribedEndDate(null)
					.role(role).rolePermission(permissions).build();

			repository.save(user);
			
			String token = jwtService.generateToken(user);

			return ResponseDTO.builder().accessToken(token).build();

		}
	}

	public ResponseDTO login(LoginDTO loginDTO) throws UserNotFoundException {

		try {
			authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(loginDTO.getEmail(), loginDTO.getPassword()));
			User user = repository.findByemail(loginDTO.getEmail());
			String token = jwtService.generateToken(user);
			return ResponseDTO.builder().accessToken(token).build();
		} catch (BadCredentialsException | UsernameNotFoundException e) {
			throw new UserNotFoundException();
		}
	}

}
