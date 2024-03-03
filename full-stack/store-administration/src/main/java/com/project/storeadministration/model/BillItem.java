package com.project.storeadministration.model;

import org.springframework.data.mongodb.core.mapping.DocumentReference;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BillItem {
  @DocumentReference(collection = "products")
  private Product product;
  private int quantity;
}
