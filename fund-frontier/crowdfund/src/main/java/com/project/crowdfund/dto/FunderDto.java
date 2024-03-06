package com.project.crowdfund.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FunderDto {
    private String _id;
    private String profilePhoto;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String countryOfBirth;
    private String countryOfResidence;
    private String address;
    private String city;
    private String state;
    private String zipCode;
    private String occupation;
}
