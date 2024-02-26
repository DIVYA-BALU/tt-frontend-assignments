package com.project.storeadministration.dto;

import java.util.List;

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
  private String role;
  private List<String> permissions;
}