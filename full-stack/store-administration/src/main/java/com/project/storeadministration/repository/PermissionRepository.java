package com.project.storeadministration.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.project.storeadministration.model.Permission;

public interface PermissionRepository extends MongoRepository<Permission, String> {

  Permission findByName(String permissionName);

}
