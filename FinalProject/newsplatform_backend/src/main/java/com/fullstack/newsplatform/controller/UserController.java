package com.fullstack.newsplatform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.newsplatform.dto.UserDTO;
import com.fullstack.newsplatform.exception.UserEmailAlreadyExistsException;
import com.fullstack.newsplatform.exception.UserNotFoundException;
import com.fullstack.newsplatform.model.User;
import com.fullstack.newsplatform.service.UserService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserService service;

	@CrossOrigin(origins = "http://localhost:4200")
	@PreAuthorize("hasAuthority('CREATE_ACCOUNT')")
	@PostMapping("/create-user")
	public String addUser(@RequestBody UserDTO user) throws UserEmailAlreadyExistsException {
		return service.addUser(user);
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@PreAuthorize("hasAuthority('MANAGE_ACCOUNT')")
	@GetMapping("/all-users")
	public Page<User> getAllUsers(@RequestParam int pageIndex, @RequestParam int pageSize)
			throws UserNotFoundException {
		Pageable pageable = PageRequest.of(pageIndex, pageSize);
		 Page<User> users = service.getAllUsers(pageable);
		System.out.println("Total Pages: " + users.getTotalPages());
	    System.out.println("Total Elements: " + users.getTotalElements());
		return users;
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/user")
	public User getUser(HttpServletRequest request) throws UserNotFoundException {
		String token = request.getHeader("Authorization").substring(7);
		return service.getUser(token);
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@PatchMapping("/update")
	public String update(@RequestBody User u) throws UserNotFoundException {
		return service.updateUser(u);
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/delete")
	public String delete(HttpServletRequest request) throws UserNotFoundException {
		String token = request.getHeader("Authorization").substring(7);
		return service.deleteUser(token);
	}

	@PutMapping("/change-password")
	public String changePassword(@RequestParam String email, @RequestParam String newPassword)
			throws UserNotFoundException {
		return service.changePassword(email, newPassword);
	}
}
