package com.project.crowdfund.service;

import java.util.List;

import com.project.crowdfund.model.StudentAccountDetails;

public interface StudentAccountDetailsService {

    StudentAccountDetails saveStudentAccountDetails(StudentAccountDetails studentAccountDetails);

    StudentAccountDetails getStudentAccountDetails(String email);

    List<StudentAccountDetails> findAll();

    StudentAccountDetails updateStudentAccountDetails(StudentAccountDetails studentAccountDetails);

}
