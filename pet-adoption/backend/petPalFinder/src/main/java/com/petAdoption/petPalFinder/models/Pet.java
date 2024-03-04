package com.petAdoption.petPalFinder.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

public class Pet {
    @Id
    private String _id;
    private String category;
    private String breed;
    private Integer quantity;
    private String gender;
    private Double weight;
    private Boolean isInfected;
    @DocumentReference(collection = "organizations")
    private Organization posterId;
    private String images;
    private String description;
    private Boolean isAdopted;
}
