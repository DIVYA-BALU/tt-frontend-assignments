package com.petAdoption.petPalFinder.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.petAdoption.petPalFinder.dto.PetPostDto;
import com.petAdoption.petPalFinder.dto.StatusMessage;
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
    public ResponseEntity<List<PetPost>> nearByPost(@RequestBody Location location,@RequestParam Integer page) {
        return ResponseEntity.ok(petPostService.getNearByPost(location,page));
    }

    @GetMapping("latest")
    public ResponseEntity<List<PetPost>> getLatestPost(@RequestParam Integer page) {
        return ResponseEntity.ok(petPostService.getLatestPost(page).getContent());
    }

    @GetMapping
    public ResponseEntity<PetPost> getpetPost(@RequestParam String id) {
        return ResponseEntity.ok(petPostService.getPetPostById(id));
    }

    @GetMapping("search-input/category")
    public ResponseEntity<List<String>> getPetCategoryInput( @RequestParam String value) {
        return ResponseEntity.ok(petPostService.petCategoryInput(value));
    }

    @GetMapping("search-input/breed")
    public ResponseEntity<List<String>> getPetBreedsInput(@RequestParam String category, @RequestParam String breed) {
        return ResponseEntity.ok(petPostService.petBreedInput(category, breed));
    }

    @GetMapping("search-input/search")
    public ResponseEntity<List<PetPost>> searchedPets(String category, String breed,String gender, String isInfected, String city,Integer page) {
        
        return ResponseEntity.ok(petPostService.searchedPets(category, breed, gender, isInfected, city, page));
    }

    @DeleteMapping
    public ResponseEntity<StatusMessage> deletePost(String id) {
        return ResponseEntity.ok(petPostService.deletePost(id));
    }
    
}
