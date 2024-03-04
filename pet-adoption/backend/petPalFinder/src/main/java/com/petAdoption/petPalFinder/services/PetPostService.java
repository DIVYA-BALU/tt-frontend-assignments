package com.petAdoption.petPalFinder.services;

import java.util.List;

import com.petAdoption.petPalFinder.dto.PetPostDto;
import com.petAdoption.petPalFinder.models.Location;
import com.petAdoption.petPalFinder.models.PetPost;

public interface PetPostService {
    public List<PetPost> getPostByPoster(String posterId);
    public PetPost savePost(PetPostDto petPostDto);
    public List<PetPost> getNearByPost(Location location);
    public List<PetPost> getLatestPost();
    public PetPost getPetPostById(String id);
}
