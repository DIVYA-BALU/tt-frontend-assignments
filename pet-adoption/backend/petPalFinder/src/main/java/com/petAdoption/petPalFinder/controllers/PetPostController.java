package com.petAdoption.petPalFinder.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.petAdoption.petPalFinder.dto.PetPostDto;
import com.petAdoption.petPalFinder.models.Location;
import com.petAdoption.petPalFinder.models.Organization;
import com.petAdoption.petPalFinder.models.PetPost;
import com.petAdoption.petPalFinder.services.PetPostService;

@Controller
@CrossOrigin
@RequestMapping(path = "pet-post")
public class PetPostController {
    
    @Autowired
    PetPostService petPostService;

    @GetMapping("poster")
    public ResponseEntity<List<PetPost>> getPetPostByPoster(@RequestParam String posterId) {
        return ResponseEntity.ok(petPostService.getPostByPoster(posterId));
    }

    @PostMapping
    public ResponseEntity<PetPost> savePetPost(@ModelAttribute PetPostDto petPostDto) {
        return ResponseEntity.ok(petPostService.savePost(petPostDto));
    }

    @PostMapping("near-by-post")
    public ResponseEntity<List<PetPost>> nearByPost(@RequestBody Location location) {
        return ResponseEntity.ok(petPostService.getNearByPost(location));
    }

    @GetMapping("latest")
    public ResponseEntity<List<PetPost>> getLatestPost() {
        return ResponseEntity.ok(petPostService.getLatestPost());
    }

    @GetMapping
    public ResponseEntity<PetPost> getpetPost(@RequestParam String id) {
        return ResponseEntity.ok(petPostService.getPetPostById(id));
    }
}
