package com.petAdoption.petPalFinder.dto;

import java.sql.Date;

import org.springframework.web.multipart.MultipartFile;

import com.petAdoption.petPalFinder.models.Location;

import lombok.Data;

@Data
public class Registration {
    private String email;
    private String password;
    private String role;
    private AdopterDto adopterDto;
}
