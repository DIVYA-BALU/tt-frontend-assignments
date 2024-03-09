package com.project.storeadministration.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.storeadministration.model.Role;
import com.project.storeadministration.service.RoleService;

@CrossOrigin("*")
@RequestMapping("roles")
@RestController
public class RoleController {

  @Autowired
  private RoleService roleService;

  @GetMapping
  public ResponseEntity<List<Role>> getAllRoles() {
    return new ResponseEntity<List<Role>>(roleService.getAllRoles(), HttpStatus.OK);
  }
}
