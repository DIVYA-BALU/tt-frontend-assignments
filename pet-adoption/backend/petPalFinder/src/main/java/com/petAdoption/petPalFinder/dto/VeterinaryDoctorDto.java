package com.petAdoption.petPalFinder.dto;

import org.springframework.web.multipart.MultipartFile;
import com.petAdoption.petPalFinder.models.Location;
import lombok.Data;

@Data
public class VeterinaryDoctorDto {

    private String id;
    private String name;
    private String email;
    private MultipartFile profilePhoto;
    private Location location;
    private String degree;
    private MultipartFile degreeCertificate;
    private long contactNumber;
    private String status = "initiated";
    private String isSubscribed = "false";
}
