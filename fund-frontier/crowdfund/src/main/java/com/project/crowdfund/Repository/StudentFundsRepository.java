package com.project.crowdfund.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.project.crowdfund.model.StudentFunds;

@Repository
public interface StudentFundsRepository extends MongoRepository<StudentFunds, String> {

    StudentFunds findByStudentEmail(String email);

}
