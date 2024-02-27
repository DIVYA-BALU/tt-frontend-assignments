package com.project.storeadministration.dto;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.DocumentReference;

import com.project.storeadministration.model.Permission;
import com.project.storeadministration.model.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class LoginResponse {
  private String userEmail;
  private List<String> branchesId;
  private String sectionId;
  private String jwt;
  @DocumentReference(collection =  "roles")
  private Role role;
  @DocumentReference(collection = "permissions")
  private List<Permission> permissions;
}