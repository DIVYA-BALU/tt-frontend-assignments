package com.petAdoption.petPalFinder.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping(path = "sample")
public class TestingController {
    @PreAuthorize("hasRole('USER')")
    
    @GetMapping
    public ResponseEntity<?> test2() {
        System.out.println("dfsds");
        return new ResponseEntity<>("test2",HttpStatus.OK);
    }
    
}
