package com.petAdoption.petPalFinder.services;

import java.util.List;

import org.springframework.data.domain.Page;

import com.petAdoption.petPalFinder.dto.PetPostDto;
import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.models.Location;
import com.petAdoption.petPalFinder.models.PetPost;

public interface PetPostService {
    public List<PetPost> getPostByPoster(String posterId);
    public PetPost savePost(PetPostDto petPostDto);
    public List<PetPost> getNearByPost(Location location,Integer page);
    public Page<PetPost> getLatestPost(Integer page);
    public PetPost getPetPostById(String id);
    public List<String> petCategoryInput(String value);
    public List<String> petBreedInput(String category,String breed);
    public List<PetPost> searchedPets(String category, String breed,String gender, String isInfected, String city,Integer page);
    public StatusMessage deletePost(String id);
}
