package com.project.storeadministration.model;

import org.springframework.data.mongodb.core.mapping.DocumentReference;

public class BillItem {
  @DocumentReference(collection = "products")
  private Product product;
  private int quantity;
}
