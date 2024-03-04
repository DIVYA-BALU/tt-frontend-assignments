package com.petAdoption.petPalFinder.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.models.AdoptionDetail;
import com.petAdoption.petPalFinder.services.AdoptionDetailService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@Controller
@CrossOrigin
@RequestMapping(path = "adoption-details")
public class AdoptionDetailController {
    
    @Autowired
    AdoptionDetailService adoptionDetailService;

    @PostMapping
    public ResponseEntity<StatusMessage> adoptionRequest(@RequestBody AdoptionDetail adoptionDetail) {
        return ResponseEntity.ok(adoptionDetailService.addAdoptionRequest(adoptionDetail));
    }

    @GetMapping
    public ResponseEntity<List<AdoptionDetail>> adoptionStatus(@RequestParam String id) {
        return ResponseEntity.ok(adoptionDetailService.getAdoptionStatus(id));
    }
    
}
