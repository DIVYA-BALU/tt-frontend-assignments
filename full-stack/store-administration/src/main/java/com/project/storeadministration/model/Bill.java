package com.project.storeadministration.model;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document("bills")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Bill {
  @Id
  private String _id;
  private LocalDate date;
  private List<BillItem> billItems;
  private int totalPrice;
}
