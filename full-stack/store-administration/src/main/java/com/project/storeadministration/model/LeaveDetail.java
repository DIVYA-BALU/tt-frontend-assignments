package com.project.storeadministration.model;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document("leaveDetails")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LeaveDetail {
  @Id
  private String _id;
  private LocalDate date;
  @DocumentReference(collection = "users")
  private List<User> employees;
}