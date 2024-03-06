package com.project.crowdfund.model;

import org.springframework.data.mongodb.core.mapping.DocumentReference;

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
    @DocumentReference
    private Users email;
    private String phoneNumber;
    private String countryOfBirth;
    private String countryOfResidence;
    private String address;
    private String city;
    private String state;
    private Integer zipCode;
    private String occupation;
}
