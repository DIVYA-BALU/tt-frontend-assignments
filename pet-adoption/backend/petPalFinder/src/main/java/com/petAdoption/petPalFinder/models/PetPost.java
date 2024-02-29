package com.petAdoption.petPalFinder.models;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(value = "pet_posts")
public class PetPost {
    @Id
    private String _id;
    private String category;
    private String breed;
    private Integer quantity;
    private String gender;
    private Double weight;
    private Boolean isInfected;
    private String posterId;
    private List<String> images;
    private String description;
    private Boolean isAdopted;
}
