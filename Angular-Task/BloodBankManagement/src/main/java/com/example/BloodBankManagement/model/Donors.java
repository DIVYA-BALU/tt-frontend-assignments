package com.example.BloodBankManagement.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "donors")
@Data
public class Donors {
    @Id
    private String id;
    private String donorId;
    private String name;
    private String bloodGroup;
    private int units;
    private String mobileNumber;
    private String gender;
    private int age;
    private String city;
    private String address;
    private Date date;
}
