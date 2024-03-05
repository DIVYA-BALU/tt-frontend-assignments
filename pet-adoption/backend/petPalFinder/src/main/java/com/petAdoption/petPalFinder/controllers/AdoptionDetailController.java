package com.petAdoption.petPalFinder.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.petAdoption.petPalFinder.dto.AdoptionStatusUpdateDto;
import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.models.AdoptionDetail;
import com.petAdoption.petPalFinder.services.AdoptionDetailService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
    public ResponseEntity<List<AdoptionDetail>> adoptionStatusOfRequester(@RequestParam String id) {
        return ResponseEntity.ok(adoptionDetailService.getAdoptionStatus(id));
    }

    @PreAuthorize("hasRole('ORGANIZATION')")
    @GetMapping("poster")
    public ResponseEntity<List<AdoptionDetail>> adoptionStatusOfPoster(@RequestParam String id,@RequestParam String status,@RequestParam Integer page) {
        return ResponseEntity.ok(adoptionDetailService.getAdoptionStatusOfPetPoster(id, status, page));
    }

    @PreAuthorize("hasRole('ORGANIZATION')")
    @PutMapping
    public ResponseEntity<StatusMessage> updateStatus(@RequestBody AdoptionStatusUpdateDto adoptionStatusUpdateDto) {
        return ResponseEntity.ok(adoptionDetailService.updateStatus(adoptionStatusUpdateDto.getId(), adoptionStatusUpdateDto.getStatus()));
    }
    
}
