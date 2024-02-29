package com.petAdoption.petPalFinder.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.petAdoption.petPalFinder.dto.OrganizationRegistrationDto;
import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.dto.VeterinaryDoctorDto;
import com.petAdoption.petPalFinder.models.Organization;
import com.petAdoption.petPalFinder.models.VeterinaryDoctor;
import com.petAdoption.petPalFinder.services.OrganizationService;
import com.petAdoption.petPalFinder.services.VeterinaryDoctorService;

@Controller
@CrossOrigin
@RequestMapping(path = "veterinary-doctor")
public class VeterinaryDoctorController {
    @Autowired
    VeterinaryDoctorService veterinaryDoctorService;
    
    @PostMapping
     public ResponseEntity<StatusMessage> saveOrganization(@ModelAttribute VeterinaryDoctorDto veterinaryDoctorDto) {  
        System.out.println(veterinaryDoctorDto);    
        return ResponseEntity.ok(veterinaryDoctorService.save(veterinaryDoctorDto));
    }

    @GetMapping
    public ResponseEntity<List<VeterinaryDoctor>> getOrganizationInitiated() {
        return ResponseEntity.ok(veterinaryDoctorService.getInitiatedVeterinaryDoctorDto());
    }
}
