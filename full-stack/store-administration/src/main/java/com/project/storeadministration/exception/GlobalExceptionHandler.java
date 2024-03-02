package com.project.storeadministration.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
  @ExceptionHandler(CustomException.class)
  public ResponseEntity<String> exceptionHandler(CustomException e) {
    System.out.println(e.getMessage());
    return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_ACCEPTABLE);
  }
  
  @ExceptionHandler(UsernameNotFoundException.class)
  public ResponseEntity<String> handleUsernameNotFoundExceptionException(UsernameNotFoundException e) {
    System.out.println(e.getMessage());
    return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_ACCEPTABLE);
  }
  
  @ExceptionHandler(Exception.class)
  public ResponseEntity<String> handleException(Exception e) {
    System.out.println(e.getMessage());
    return new ResponseEntity<>("Exception found", HttpStatus.NOT_FOUND);
  }

}
