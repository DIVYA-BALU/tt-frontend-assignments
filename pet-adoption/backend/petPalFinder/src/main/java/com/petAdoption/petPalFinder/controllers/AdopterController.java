package com.petAdoption.petPalFinder.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.petAdoption.petPalFinder.dto.AdopterDto;
import com.petAdoption.petPalFinder.models.Adopter;
import com.petAdoption.petPalFinder.services.AdopterService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;



@Controller
@RequestMapping(path = "adopter")
public class AdopterController {

    @Autowired
    AdopterService adopterService;
    
    @PreAuthorize("hasRole('ADOPTER')")
    @PutMapping
    public ResponseEntity<Adopter> updateAdopter(@ModelAttribute AdopterDto adopterDto) {  
        System.out.println(adopterDto);    
        return ResponseEntity.ok(adopterService.updateAdopter(adopterDto));
    }
    
    @GetMapping
    public ResponseEntity<Adopter> getAdopter(@RequestParam String id) {
        return ResponseEntity.ok(adopterService.getAdopter(id));
    }
    

}
