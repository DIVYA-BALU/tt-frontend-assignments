package com.project.storeadministration.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AttendanceRequest {
  private String userId;
  private LocalDateTime checkInTime;
  private LocalDateTime checkOutTime;
}
