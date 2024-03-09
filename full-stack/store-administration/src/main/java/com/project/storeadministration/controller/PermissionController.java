package com.project.storeadministration.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.storeadministration.model.Permission;
import com.project.storeadministration.service.PermissionService;

@CrossOrigin("*")
@RestController
@RequestMapping("permissions")
public class PermissionController {
  @Autowired
  private PermissionService permissionService;
  
  @GetMapping
  public ResponseEntity<List<Permission>> getAllPermissions() {
    return new ResponseEntity<List<Permission>>(permissionService.getAllPermissions(), HttpStatus.OK);
  }
}
