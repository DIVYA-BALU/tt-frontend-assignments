package com.project.crowdfund.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Funder {
    private String _id;
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
