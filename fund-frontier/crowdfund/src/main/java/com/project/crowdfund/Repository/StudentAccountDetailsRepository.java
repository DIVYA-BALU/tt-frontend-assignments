package com.project.crowdfund.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.project.crowdfund.model.StudentAccountDetails;

@Repository
public interface StudentAccountDetailsRepository extends MongoRepository<StudentAccountDetails, String> {

    StudentAccountDetails findByEmail(String email);

}
