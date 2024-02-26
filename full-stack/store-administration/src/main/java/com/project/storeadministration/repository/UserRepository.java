package com.project.storeadministration.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.project.storeadministration.model.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
 
  Optional<User> findByEmailId(String emailId);

  boolean existsByEmailId(String emailId);
}
