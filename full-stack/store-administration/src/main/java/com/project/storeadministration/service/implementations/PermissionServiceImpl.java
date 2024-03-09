package com.project.storeadministration.service.implementations;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.storeadministration.model.Permission;
import com.project.storeadministration.repository.PermissionRepository;
import com.project.storeadministration.service.PermissionService;

@Service
public class PermissionServiceImpl implements PermissionService{
   @Autowired
  private PermissionRepository permissionRepository;
  
  @Override
  public List<Permission> getAllPermissions() {
    return permissionRepository.findAll();
  }
}
