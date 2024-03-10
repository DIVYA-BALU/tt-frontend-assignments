package com.example.BloodBankManagement.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class RegisterRequest {
    private String email;
    private String name;
    private String bloodGroup;
    private String gender;
    private int age;
    private String mobileNumber;
    private String password;
}
