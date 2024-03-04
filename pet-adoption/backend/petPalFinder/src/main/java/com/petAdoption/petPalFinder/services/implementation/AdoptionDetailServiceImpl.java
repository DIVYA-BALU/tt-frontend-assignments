package com.petAdoption.petPalFinder.services.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.models.AdoptionDetail;
import com.petAdoption.petPalFinder.repositorys.AdoptionDetailRepository;
import com.petAdoption.petPalFinder.services.AdoptionDetailService;

@Service
public class AdoptionDetailServiceImpl implements AdoptionDetailService {

    @Autowired
    AdoptionDetailRepository adoptionDetailRepository;

    @Override
    public StatusMessage addAdoptionRequest(AdoptionDetail adoptionDetail) {
        StatusMessage statusMessage = new StatusMessage();
        adoptionDetailRepository.save(adoptionDetail);
        statusMessage.setMessage("success");
        return statusMessage;
    }

    @Override
    public List<AdoptionDetail> getAdoptionStatus(String profileId) {
        return adoptionDetailRepository.findByProfileId(profileId);
    }

    @Override
    public List<AdoptionDetail> getAdoptionRequest(String profileId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAdoptionRequest'");
    }
    
}
