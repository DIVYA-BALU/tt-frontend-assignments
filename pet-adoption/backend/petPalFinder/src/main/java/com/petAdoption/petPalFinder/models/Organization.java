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
@Document(value = "organizations")
public class Organization {
    @Id
    private String _id;
    private String name;
    private String email;
    private String organizationPhoto;
    private Location location;
    private Long contactNumber;
    private String status;
}
