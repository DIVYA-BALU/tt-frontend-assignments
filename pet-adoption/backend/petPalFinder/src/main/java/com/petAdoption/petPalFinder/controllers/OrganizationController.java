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
import org.springframework.web.bind.annotation.RequestParam;

import com.petAdoption.petPalFinder.dto.OrganizationRegistrationDto;
import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.dto.StatusUpdateDto;
import com.petAdoption.petPalFinder.models.Organization;
import com.petAdoption.petPalFinder.services.OrganizationService;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;


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

    @PutMapping
    public ResponseEntity<StatusMessage> changeStatus(@RequestBody StatusUpdateDto statusUpdateDto) {
        return ResponseEntity.ok(organizationService.updateStatus(statusUpdateDto));
    }

    @GetMapping("search-city")
    public ResponseEntity<List<String>> searchCity(@RequestParam String city) {
        return ResponseEntity.ok(organizationService.searchCity(city));
    }

    @GetMapping("detail")
    public ResponseEntity<Organization> getOrganization(@RequestParam String id) {
        return ResponseEntity.ok(organizationService.getOrganizationById(id));
    }

    @PutMapping("update")
    public ResponseEntity<StatusMessage> updateOrganization(@ModelAttribute OrganizationRegistrationDto organizationRegistrationDto) {
        return ResponseEntity.ok(organizationService.updateOrganization(organizationRegistrationDto));
    }
}
