package com.application.Issue.security.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.application.Issue.security.user.User;
import java.util.List;


@Repository
public interface UserRepository extends MongoRepository<User, String>{

	User findByUserName(String userName);

	//security
	Optional<User> findByUsername(String username);

	boolean existsByUserName(String email);
}
