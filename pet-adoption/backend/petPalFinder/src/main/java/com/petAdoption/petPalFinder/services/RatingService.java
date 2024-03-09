package com.petAdoption.petPalFinder.services;

import java.util.List;

import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.models.Rating;

public interface RatingService {
    public List<Rating> getDoctor();
    public StatusMessage addRating(Rating rating);
}
