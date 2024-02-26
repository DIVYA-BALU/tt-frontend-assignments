package com.project.storeadministration.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document("attendaceDetails")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AttendanceDetail {
  @Id
  private String _id;
  @DocumentReference(collection = "users")
  private User employee;
  private LocalDate date;
  private LocalDateTime checkInTime;
  private LocalDateTime checkOutTime;
}
