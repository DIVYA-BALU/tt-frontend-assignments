package com.example.BloodBankManagement.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "blood_request")
@Data
public class BloodRequest {
    @Id
    private String id;
    private String requestId;
    private String name;
    private String email;
    private String bloodGroup;
    private int units;
    private String disease;
    private String mobileNumber;
    private String gender;
    private int age;
    private String status;    
}
