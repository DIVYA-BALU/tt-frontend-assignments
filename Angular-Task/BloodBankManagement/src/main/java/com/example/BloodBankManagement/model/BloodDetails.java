package com.example.BloodBankManagement.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "blood_details")
@Data
public class BloodDetails {
    @Id
    private String id;
    private String email;
    private String bloodGroup;
    private int units;
}
