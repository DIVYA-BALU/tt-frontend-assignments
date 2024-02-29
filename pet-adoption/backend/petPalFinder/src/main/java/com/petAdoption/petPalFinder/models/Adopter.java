package com.petAdoption.petPalFinder.models;

import java.util.Date;

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
@Document(value = "adopters")
public class Adopter {
    @Id
    private String _id;
    private String name;
    private String email;
    private String profilePhoto;
    private String occupation;
    private Location location;
    private Long contactNumber;
    private Date dob;
}
