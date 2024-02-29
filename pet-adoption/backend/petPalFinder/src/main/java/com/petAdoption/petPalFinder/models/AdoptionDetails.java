package com.petAdoption.petPalFinder.models;

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
@Document(value = "adoption_details")
public class AdoptionDetails {
    @Id
    private String _id;
    private String profileId;
    private PetPost petPostId;
    private Integer NoOfAdults;
    private Integer NoOfChildren;
    private Boolean allergyToAnimal;
    private String homeType;
    private Boolean familyAcceptance;
}
