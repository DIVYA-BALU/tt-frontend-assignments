package com.project.storeadministration.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EnrollUserRequest {
  private String emailId;
  private String name;
  private String password;
  private String role;
  private Long mobileNumber;
  private String branchId;
  private String sectionId;
}
