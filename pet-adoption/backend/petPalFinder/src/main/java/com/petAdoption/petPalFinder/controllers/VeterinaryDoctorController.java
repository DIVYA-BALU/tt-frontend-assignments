package com.petAdoption.petPalFinder.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.dto.StatusUpdateDto;
import com.petAdoption.petPalFinder.dto.VeterinaryDoctorDto;
import com.petAdoption.petPalFinder.models.VeterinaryDoctor;
import com.petAdoption.petPalFinder.services.VeterinaryDoctorService;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
@CrossOrigin
@RequestMapping(path = "veterinary-doctor")
public class VeterinaryDoctorController {
    @Autowired
    VeterinaryDoctorService veterinaryDoctorService;
    
    @PostMapping
     public ResponseEntity<StatusMessage> saveDoctor(@ModelAttribute VeterinaryDoctorDto veterinaryDoctorDto) {  
        System.out.println(veterinaryDoctorDto);    
        return ResponseEntity.ok(veterinaryDoctorService.save(veterinaryDoctorDto));
    }

    @GetMapping
    public ResponseEntity<List<VeterinaryDoctor>> getInitiatedVeterinaryDoctor() {
        return ResponseEntity.ok(veterinaryDoctorService.getInitiatedVeterinaryDoctor());
    }

    @GetMapping("all")
    public ResponseEntity<List<VeterinaryDoctor>> getAllDoctor() {
        return ResponseEntity.ok(veterinaryDoctorService.getApprovedVeterinaryDoctor());
    }

    @PutMapping
    public ResponseEntity<StatusMessage> changeStatus(@RequestBody StatusUpdateDto statusUpdateDto) {
        return ResponseEntity.ok(veterinaryDoctorService.updateStatus(statusUpdateDto));
    }

    @GetMapping("near-by")
    public ResponseEntity<List<VeterinaryDoctor>> getApprovedVeterinaryDoctor() {
        return ResponseEntity.ok(veterinaryDoctorService.getNearByVeterinaryDoctor());
    }

    @GetMapping("profile/{id}")
    public ResponseEntity<VeterinaryDoctor> getDoctor(@PathVariable String id) {
        return ResponseEntity.ok(veterinaryDoctorService.getVeterinaryDoctor(id));
    }
    
    @PutMapping("update")
     public ResponseEntity<StatusMessage> update(@ModelAttribute VeterinaryDoctorDto veterinaryDoctorDto) {  
        System.out.println(veterinaryDoctorDto);    
        return ResponseEntity.ok(veterinaryDoctorService.update(veterinaryDoctorDto));
    }
}
