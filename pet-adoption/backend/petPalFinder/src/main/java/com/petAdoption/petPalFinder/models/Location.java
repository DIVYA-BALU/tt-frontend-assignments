package com.petAdoption.petPalFinder.models;

import lombok.Data;

@Data
public class Location {
    private String doorNo;
    private String street;
    private String city;
    private String district;
    private String state;
    private String country;
}
