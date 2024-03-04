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
@Document(value = "veterinary_doctors")
public class VeterinaryDoctor {
    @Id
    private String _id;
    private String name;
    private String profilePhoto;
    private String email;
    private Location location;
    private String degree;
    private String degreeCertificate;
    private long contactNumber;
    private String status;
    private Boolean isSubscribed;
}
