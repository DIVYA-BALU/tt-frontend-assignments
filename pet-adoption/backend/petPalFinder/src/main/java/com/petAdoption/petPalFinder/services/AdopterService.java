package com.petAdoption.petPalFinder.services;

import com.petAdoption.petPalFinder.dto.AdopterDto;
import com.petAdoption.petPalFinder.models.Adopter;

public interface AdopterService {
    public Adopter updateAdopter(AdopterDto adopter);
    public Adopter getAdopter(String id);
    public Adopter getAdopterByName(String name);
}
