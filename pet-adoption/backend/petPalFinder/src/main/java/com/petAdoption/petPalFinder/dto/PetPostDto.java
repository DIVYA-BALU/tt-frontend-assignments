package com.petAdoption.petPalFinder.dto;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class PetPostDto {
    private String category;
    private String breed;
    private Integer quantity;
    private String gender;
    private Double weight;
    private Boolean isInfected;
    private String posterId;
    private MultipartFile image;
    private String description;
    private Boolean isAdopted = false;
}
