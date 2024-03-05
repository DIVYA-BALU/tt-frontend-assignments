package com.petAdoption.petPalFinder.services;

import java.util.List;

import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.models.AdoptionDetail;

public interface AdoptionDetailService {
    public StatusMessage addAdoptionRequest(AdoptionDetail adoptionDetail);
    public List<AdoptionDetail> getAdoptionStatus(String profileId);
    public List<AdoptionDetail> getAdoptionStatusOfPetPoster(String posterId,String status,Integer page);
    public StatusMessage updateStatus(String posterId,String status);
}
