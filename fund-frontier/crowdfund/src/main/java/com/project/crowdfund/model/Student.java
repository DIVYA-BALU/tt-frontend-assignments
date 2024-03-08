package com.project.crowdfund.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
public class Student {
    @Id
    private String _id;
    private String profilePhoto;
    private String firstName;
    private String lastName;
    @DocumentReference
    private Users email;
    private String phoneNumber;
    private String gender;
    private String countryOfBirth;
    private String countryOfResidence;
    private LocalDateTime dateOfBirth;
    private String address;
    private String city;
    private String state;
    private Integer zipCode;
    private String school;
    private String aadharCardProof;
    private String incomeProof;
    private String collegeName;
    private String yearOfStudy;
    private String course;
    private String studentIdentityProof;
    private String studentId;
    private BigDecimal fundRequired;
    private String feeDetails;
    private LocalDateTime endDate;
    private String shortStory;
    private String status;
}
