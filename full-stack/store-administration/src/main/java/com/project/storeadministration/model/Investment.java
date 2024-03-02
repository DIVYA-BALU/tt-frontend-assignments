package com.project.storeadministration.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document("investments")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Investment {
  @Id
  private String _id;;
  private int amount;
  private String description;
}