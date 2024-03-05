package com.petAdoption.petPalFinder.dto;

import java.sql.Date;
import org.springframework.web.multipart.MultipartFile;

import com.petAdoption.petPalFinder.models.Location;

import lombok.Data;

@Data
public class AdopterDto {
    private String id;
    private String name;
    private MultipartFile profilePhoto;
    private String occupation;
    private Location location;
    private Long contactNumber;
    private String dob;
}
