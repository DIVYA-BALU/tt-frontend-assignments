package com.project.crowdfund.service;

import org.springframework.data.domain.Page;

import com.project.crowdfund.dto.RequestDto;
import com.project.crowdfund.dto.LoginRequest;
import com.project.crowdfund.dto.LoginResponse;
import com.project.crowdfund.model.Role;
import com.project.crowdfund.model.Users;

public interface UserService {

    Users save(RequestDto user);

    LoginResponse login(LoginRequest user);

    Page<Users> getAllUsers(Integer pageNo, Integer pageSize);

    Users getUser(String id);

    Users getUserByEmail(String userEmail);

    Role getUserRole(String email);

    Users updateUser(Users request);
}
