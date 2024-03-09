package com.project.crowdfund.service.serviceimp;

import java.util.List;

import org.springframework.stereotype.Service;

import com.project.crowdfund.Repository.StudentAccountDetailsRepository;
import com.project.crowdfund.model.StudentAccountDetails;
import com.project.crowdfund.service.StudentAccountDetailsService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StudentAccountDetailsServiceImp implements StudentAccountDetailsService {

    private final StudentAccountDetailsRepository studentAccountDetailsRepository;

    @Override
    public StudentAccountDetails saveStudentAccountDetails(StudentAccountDetails studentAccountDetails) {
        return studentAccountDetailsRepository.save(studentAccountDetails);
    }

    @Override
    public StudentAccountDetails getStudentAccountDetails(String email) {

        return studentAccountDetailsRepository.findByEmail(email);
    }

    @Override
    public List<StudentAccountDetails> findAll() {
        return studentAccountDetailsRepository.findAll();
    }

    @Override
    public StudentAccountDetails updateStudentAccountDetails(StudentAccountDetails studentAccountDetails) {
        return studentAccountDetailsRepository.save(studentAccountDetails);
    }

}
