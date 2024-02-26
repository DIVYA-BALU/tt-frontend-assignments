package com.project.storeadministration.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document("sections")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Section {
  @Id
  private String _id;
  private String name;
}
