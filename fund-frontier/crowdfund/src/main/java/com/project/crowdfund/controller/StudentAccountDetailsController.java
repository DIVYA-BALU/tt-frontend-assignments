package com.project.crowdfund.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.crowdfund.model.StudentAccountDetails;
import com.project.crowdfund.service.StudentAccountDetailsService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/studentaccountdetails")
public class StudentAccountDetailsController {
    private final StudentAccountDetailsService studentAccountDetailsService;

    @PostMapping("/save")
    public ResponseEntity<StudentAccountDetails> saveStudentAccountDetails(
            @RequestBody StudentAccountDetails studentAccountDetails) {
        return ResponseEntity.ok(studentAccountDetailsService.saveStudentAccountDetails(studentAccountDetails));
    }

    @GetMapping("/get/{email}")
    public ResponseEntity<StudentAccountDetails> getStudentAccountDetails(@PathVariable String email) {
        return ResponseEntity.ok(studentAccountDetailsService.getStudentAccountDetails(email));
    }

    @GetMapping("/findall")
    public ResponseEntity<List<StudentAccountDetails>> findAll() {
        return ResponseEntity.ok(studentAccountDetailsService.findAll());
    }

    @PatchMapping("/update")
    public ResponseEntity<StudentAccountDetails> updateStudentAccountDetails(
            @RequestBody StudentAccountDetails studentAccountDetails) {
        return ResponseEntity.ok(studentAccountDetailsService.updateStudentAccountDetails(studentAccountDetails));
    }

}
