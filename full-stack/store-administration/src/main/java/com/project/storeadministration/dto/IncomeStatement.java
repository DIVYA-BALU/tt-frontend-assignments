package com.project.storeadministration.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class IncomeStatement {
  private String branchId;
  private String branchName;
  private String sectionId;
  private String sectionName;
  private int revenue;
  private int cogs;
  private Date date;
  private String monthAndYear;
}
