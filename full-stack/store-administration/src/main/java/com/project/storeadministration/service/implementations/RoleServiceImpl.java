package com.project.storeadministration.service.implementations;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.storeadministration.model.Role;
import com.project.storeadministration.repository.RoleRepository;
import com.project.storeadministration.service.RoleService;

@Service
public class RoleServiceImpl implements RoleService{

  @Autowired
  private RoleRepository roleRepository;
  
  @Override
  public List<Role> getAllRoles() {
    return roleRepository.findAll();
  }
  
}
