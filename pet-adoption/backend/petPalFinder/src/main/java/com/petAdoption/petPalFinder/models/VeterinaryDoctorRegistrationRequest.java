package com.petAdoption.petPalFinder.models;

import org.springframework.data.annotation.Id;

public class VeterinaryDoctorRegistrationRequest {
    @Id
    private String _id;
    private String name;
    private String profilePhoto;
    private String email;
    private Location location;
    private String degree;
    private long contactNumber;
}
