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
import com.petAdoption.petPalFinder.models.Organization;
import com.petAdoption.petPalFinder.services.OrganizationService;

@CrossOrigin
@Controller
@RequestMapping(path = "organization")
public class OrganizationController {

    @Autowired
    OrganizationService organizationService;
    
    @PostMapping
     public ResponseEntity<StatusMessage> saveOrganization(@ModelAttribute OrganizationRegistrationDto organizationRegistrationDto) {  
        System.out.println(organizationRegistrationDto);    
        return ResponseEntity.ok(organizationService.save(organizationRegistrationDto));
    }

    @GetMapping
    public ResponseEntity<List<Organization>> getOrganizationInitiated() {
        return ResponseEntity.ok(organizationService.getInitiatedOrganization());
    }
}
