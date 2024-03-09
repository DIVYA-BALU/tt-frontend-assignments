package com.petAdoption.petPalFinder.dto;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.petAdoption.petPalFinder.models.Rating;
import com.petAdoption.petPalFinder.services.RatingService;

@Controller
@CrossOrigin
@RequestMapping(path = "rating")
public class RatingController {

    @Autowired
    RatingService ratingService;

    @PostMapping
    public ResponseEntity<StatusMessage> addRating(@RequestBody Rating rating) {
        return ResponseEntity.ok(ratingService.addRating(rating));
    }
    
    @GetMapping
    public ResponseEntity<List<Rating>> getDoctors() {
        return ResponseEntity.ok(ratingService.getDoctor());
    }
    
}
