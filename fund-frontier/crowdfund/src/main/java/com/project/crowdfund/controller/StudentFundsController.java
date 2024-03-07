package com.project.crowdfund.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.crowdfund.model.StudentFunds;
import com.project.crowdfund.service.StudentFundsService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/studentfund")
public class StudentFundsController {

    private final StudentFundsService studentFundsService;

    @PutMapping("/update")
    public ResponseEntity<StudentFunds> updateFund(@RequestBody StudentFunds studentFunds){
        return ResponseEntity.ok(studentFundsService.updateFund(studentFunds));
    }
    
}
