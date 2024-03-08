package com.project.crowdfund.dto;

import java.math.BigDecimal;

import org.springframework.data.annotation.Id;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class StudentDto {
    @Id
    private String _id;
    private MultipartFile profilePhoto;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String gender;
    private String countryOfBirth;
    private String countryOfResidence;
    private String dateOfBirth;
    private String address;
    private String city;
    private String state;
    private Integer zipCode;
    private String school;
    private MultipartFile aadharCardProof;
    private MultipartFile incomeProof;
    private String collegeName;
    private String yearOfStudy;
    private String course;
    private MultipartFile studentIdentityProof;
    private String studentId;
    private BigDecimal fundRequired;
    private MultipartFile feeDetails;
    private String endDate;
    private String shortStory;
    private String status;
    private String reason;
}
