package com.petAdoption.petPalFinder.dto;




import lombok.Data;

@Data
public class Registration {
    private String email;
    private String password;
    private String role;
    private AdopterDto adopterDto;
}
