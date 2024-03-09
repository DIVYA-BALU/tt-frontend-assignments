package com.petAdoption.petPalFinder.models;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(value = "deleted_post")
@Builder
public class DeletedPetPost {
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
    private Date postedDate;
}
