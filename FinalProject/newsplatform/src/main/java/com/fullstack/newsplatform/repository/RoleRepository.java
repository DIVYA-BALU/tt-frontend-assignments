package com.fullstack.newsplatform.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.fullstack.newsplatform.model.Role;


public interface RoleRepository extends MongoRepository<Role, String>{

	Role findByroleName(String string);

}
