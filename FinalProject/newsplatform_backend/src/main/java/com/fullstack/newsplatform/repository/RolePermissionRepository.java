package com.fullstack.newsplatform.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.fullstack.newsplatform.model.Role;
import com.fullstack.newsplatform.model.RolePermission;

public interface RolePermissionRepository extends MongoRepository<RolePermission, String>{

	List<RolePermission> findByRole(Role role);

}
