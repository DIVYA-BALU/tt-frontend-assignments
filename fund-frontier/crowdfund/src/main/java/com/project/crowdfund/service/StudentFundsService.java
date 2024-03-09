package com.project.crowdfund.service;

import com.project.crowdfund.model.Student;
import com.project.crowdfund.model.StudentFunds;

public interface StudentFundsService {

    StudentFunds saveAmount(Student student);

    StudentFunds updateFund(StudentFunds studentFunds);

    StudentFunds getStudent(String email);

    void addAmount(String studentEmail, Double studentAmount);
}
