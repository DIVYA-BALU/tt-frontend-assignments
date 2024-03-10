package com.fullstack.newsplatform.service;

import com.fullstack.newsplatform.dto.LoginDTO;
import com.fullstack.newsplatform.dto.ResponseDTO;
import com.fullstack.newsplatform.dto.SignupDTO;
import com.fullstack.newsplatform.exception.UserEmailAlreadyExistsException;
import com.fullstack.newsplatform.exception.UserNotFoundException;

public interface AuthService {
	ResponseDTO signup(SignupDTO signupDTO) throws UserEmailAlreadyExistsException;
	ResponseDTO login(LoginDTO loginDTO) throws UserNotFoundException;

}
