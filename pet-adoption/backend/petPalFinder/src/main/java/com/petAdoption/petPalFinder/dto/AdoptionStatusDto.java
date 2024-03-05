package com.petAdoption.petPalFinder.dto;

import com.petAdoption.petPalFinder.models.AdoptionDetail;
import com.petAdoption.petPalFinder.models.Location;

import lombok.Data;

@Data
public class AdoptionStatusDto {
    private AdoptionDetail adoptionDetail;
    private String profileUrl;
    private String name;
    private String email;
    private Long contactNumber;
    private Location location;
}
