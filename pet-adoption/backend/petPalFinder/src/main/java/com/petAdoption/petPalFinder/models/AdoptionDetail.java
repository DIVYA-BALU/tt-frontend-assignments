package com.petAdoption.petPalFinder.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(value = "adoption_details")
public class AdoptionDetail {
    @Id
    private String _id;
    private String profileId;
    @DocumentReference(collection = "pet_posts")
    private PetPost petPostId;
    private Integer noOfAdults;
    private Integer noOfChildren;
    private Boolean allergyToAnimal;
    private String homeType;
    private Boolean familyAcceptance;
    private String status = "initiated";
    private String posterId;
    private String userType;
    private Date requestDate = new Date();
}
