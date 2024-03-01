package com.project.storeadministration.dto;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import com.project.storeadministration.model.Branch;
import com.project.storeadministration.model.Permission;
import com.project.storeadministration.model.Role;
import com.project.storeadministration.model.Section;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ProductDetails {
  @Id
  private String _id;
  private String productName;
  @DocumentReference(collection = "branches")
  private Branch branch;
  @DocumentReference(collection = "sections")
  private Section section;
  private int quantity;
  private int price;
  private int cogs;
  private int availableQuantity;
}
