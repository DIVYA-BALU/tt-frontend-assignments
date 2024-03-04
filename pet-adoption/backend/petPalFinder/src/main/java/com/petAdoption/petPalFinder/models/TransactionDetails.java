package com.petAdoption.petPalFinder.models;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class TransactionDetails {
     @Id
    private String id;
    private String orderId;
    private String currency;
    private Integer amount;
    private String key;   
}
