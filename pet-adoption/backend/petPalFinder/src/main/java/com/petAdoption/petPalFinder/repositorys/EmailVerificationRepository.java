package com.petAdoption.petPalFinder.repositorys;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.petAdoption.petPalFinder.models.EmailVerification;
import java.util.Optional;

@Repository
public interface EmailVerificationRepository extends MongoRepository<EmailVerification,String>{
    EmailVerification findByEmail(String receiverEmail);
    boolean existsByEmail(String receiverEmail);
    void deleteByEmail(String receiverEmail);
}
