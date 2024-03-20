package com.fullstack.newsplatform.service.impl;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fullstack.newsplatform.dto.UserDTO;
import com.fullstack.newsplatform.exception.UserEmailAlreadyExistsException;
import com.fullstack.newsplatform.exception.UserNotFoundException;
import com.fullstack.newsplatform.jwtService.JwtService;
import com.fullstack.newsplatform.model.Role;
import com.fullstack.newsplatform.model.RolePermission;
import com.fullstack.newsplatform.model.User;
import com.fullstack.newsplatform.repository.RolePermissionRepository;
import com.fullstack.newsplatform.repository.RoleRepository;
import com.fullstack.newsplatform.repository.UserRepository;
import com.fullstack.newsplatform.service.UserService;


@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository repository;
		
	@Autowired
	JwtService jwtService;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Autowired
	RoleRepository repo;
	
	@Autowired
	RolePermissionRepository repo1;

	@Override
	public Page<User> getAllUsers(Pageable pageable) throws UserNotFoundException {
		Page<User> users = repository.findAll(pageable);
		if (users != null) {
			return users;
		} else {
			throw new UserNotFoundException();
		}
	}

	@Override
	public boolean existsByEmail(String email) {
		return repository.existsByemail(email);
	}


	@Override
	public User getUser(String token) throws UserNotFoundException{
		String email = jwtService.extractUsername(token);
		User user = repository.findByemail(email);
				
		if(user!=null) {
			return user;
		}else {
			throw new UserNotFoundException();
		}
	}

	@Override
	public String updateUser(User u) throws UserNotFoundException{
		if (existsByEmail(u.getEmail())) {
			User user = repository.findByemail(u.getEmail());
			u.setId(user.getId());
			u.setPassword(user.getPassword());
			u.setRole(user.getRole());
			u.setRolePermission(user.getRolePermission());
			repository.save(u);
			return "Updated Successfully";
		}else {
			throw new UserNotFoundException();
		}
	}

	@Override
	public String deleteUser(String token) throws UserNotFoundException{
		String email = jwtService.extractUsername(token);
		if (existsByEmail(email)) {
			repository.deleteByemail(email);
			return "DELETED SUCCESSFULLY";
		}else {
			throw new UserNotFoundException();
		}
	}

	@Override
	public String changePassword(String email, String newPassword) throws UserNotFoundException{
		return null;
//		newPassword = passwordEncoder.encode(newPassword);
//		if (existsByEmail(email)) {
//			dao.changePassword(email, newPassword);
//			return "PASSWORD CHANGED SUCCESSFULLY";
//		}else {
//			throw new UserNotFoundException();
//		}
	}

	@Override
	public String addUser(UserDTO user) throws UserEmailAlreadyExistsException {
		boolean check1 = existsByEmail(user.getEmail());

		if (check1) {
			throw new UserEmailAlreadyExistsException();
		} else {
			
			Role role = repo.findByroleName(user.getRole().toUpperCase());
			List<RolePermission> permissions = repo1.findByRole(role);
			
			LocalDateTime today = LocalDateTime.now();
			Date utcDate = Date.from(today.atZone(ZoneId.of("UTC")).toInstant());
					
			User u = User.builder().firstName(user.getFirstName()).lastName("").email(user.getEmail()).phoneNo(user.getPhoneNo())
					.occupation("").location("").createdDate(utcDate)
					.password(passwordEncoder.encode(user.getPassword()))
					.role(role).rolePermission(permissions).build();

			repository.save(u);
	}
		return "Successfully Added";
}
}
