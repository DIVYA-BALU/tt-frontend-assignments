package com.project.crowdfund.service.serviceimp;

import org.springframework.stereotype.Service;

import com.project.crowdfund.Repository.StudentFundsRepository;
import com.project.crowdfund.model.Student;
import com.project.crowdfund.model.StudentFunds;
import com.project.crowdfund.service.StudentFundsService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StudentFundsServiceImp implements StudentFundsService {

    private final StudentFundsRepository studentFundsRepository;

    @Override
    public StudentFunds saveAmount(Student student) {

        StudentFunds studentFund = StudentFunds.builder()
                .studentEmail(student.getEmail().getEmail())
                .amount(0.00)
                .build();
        System.out.println(studentFund);
        studentFundsRepository.save(studentFund);
        return studentFund;
    }

    @Override
    public StudentFunds updateFund(StudentFunds studentFunds) {
        return studentFundsRepository.save(studentFunds);
    }

    @Override
    public StudentFunds getStudent(String email) {
        return studentFundsRepository.findByStudentEmail(email);
    }

    @Override
    public void addAmount(String studentEmail, Double studentAmount) {
        StudentFunds studentFunds = studentFundsRepository.findByStudentEmail(studentEmail);
        studentFunds.setAmount(studentAmount + studentFunds.getAmount());
        studentFundsRepository.save(studentFunds);
    }

}
