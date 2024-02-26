package com.project.storeadministration.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document("roles")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Role {
  @Id
  private String _id;
  private String name;
  private List<Permission> permissions;
}
