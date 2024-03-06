package com.petAdoption.petPalFinder.dto;

import com.petAdoption.petPalFinder.models.Location;
import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class OrganizationRegistrationDto {
    private String id;
    private String name;
    private String email;
    private MultipartFile organizationPhoto;
    private Location location;
    private Long contactNumber;
    private String status = "initiated";
}
