package com.fullstack.newsplatform.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class MyException {
	
	@ExceptionHandler(value = UserEmailAlreadyExistsException.class)
	public ResponseEntity<Object> userEmailExistsException(UserEmailAlreadyExistsException userExists) {
		return new ResponseEntity<Object>("USER EMAIL ALREADY EXISTS", HttpStatus.FORBIDDEN);
	}
	
	@ExceptionHandler(value = UserNotFoundException.class)
	public ResponseEntity<Object> userNotFoundException(UserNotFoundException userNotFound){
		return new ResponseEntity<Object>("USER NOT FOUND", HttpStatus.NOT_FOUND);
	}
}
