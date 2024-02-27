package com.project.storeadministration.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document("permissions")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Permission {
  @Id
  private String _id;
  private String name;
}
