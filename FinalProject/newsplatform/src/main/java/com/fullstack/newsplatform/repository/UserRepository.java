package com.fullstack.newsplatform.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.fullstack.newsplatform.model.Role;
import com.fullstack.newsplatform.model.User;

public interface UserRepository extends MongoRepository<User, String>{

	User findByemail(String email);

	void deleteByemail(String email);

	boolean existsByemail(String email);

	List<User> findByRole(Role role);

}
