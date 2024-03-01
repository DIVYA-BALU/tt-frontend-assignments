package com.project.storeadministration.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document("products")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Product {
  @Id
  private String _id;
  private String productName;
  @DocumentReference(collection = "branches")
  private Branch branch;
  @DocumentReference(collection = "sections")
  private Section section;
  private int totalQuantity;
  private int price;
  private int cogs;
  private int quantityAvailable;
}
