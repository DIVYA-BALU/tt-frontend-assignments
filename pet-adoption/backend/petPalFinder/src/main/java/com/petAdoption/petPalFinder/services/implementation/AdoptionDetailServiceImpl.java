package com.petAdoption.petPalFinder.services.implementation;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petAdoption.petPalFinder.dao.AdoptionDetailsDao;
import com.petAdoption.petPalFinder.dto.AdoptionStatusDto;
import com.petAdoption.petPalFinder.dto.AppointmentStatusDto;
import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.models.Adopter;
import com.petAdoption.petPalFinder.models.AdoptionDetail;
import com.petAdoption.petPalFinder.models.AppointmentStatus;
import com.petAdoption.petPalFinder.models.Organization;
import com.petAdoption.petPalFinder.repositorys.AdopterRepository;
import com.petAdoption.petPalFinder.repositorys.AdoptionDetailRepository;
import com.petAdoption.petPalFinder.repositorys.OrganizationRepository;
import com.petAdoption.petPalFinder.services.AdoptionDetailService;

@Service
public class AdoptionDetailServiceImpl implements AdoptionDetailService {

    @Autowired
    AdoptionDetailRepository adoptionDetailRepository;

     @Autowired
    AdopterRepository adopterRepository;

    @Autowired
    OrganizationRepository organizationRepository;

    @Autowired
    AdoptionDetailsDao adoptionDetailsDao;

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
    public List<AdoptionDetail> getAdoptionStatusOfPetPoster(String posterId,String status,Integer page) {
       
         List<AdoptionStatusDto> list = new ArrayList<>();
        List<AdoptionDetail> adoption = adoptionDetailsDao.getAdoptionStatus(posterId, status, page);
        // for(int  i =0;i<adoption.size();i++){
        //     AdoptionStatusDto adoptionStatusDto = new AdoptionStatusDto();
        //     if(adoption.get(i).getRequesterType().equals("ADOPTER")){
        //        Adopter adopter = adopterRepository.findById(adoption.get(i).getRequesterId()).get();
        //        adoptionStatusDto.setLocation(adopter.getLocation());
        //        adoptionStatusDto.setContactNumber(adopter.getContactNumber());
        //        adoptionStatusDto.setEmail(adopter.getEmail());
        //        adoptionStatusDto.setName(adopter.getName());
        //        adoptionStatusDto.setProfileUrl(adopter.getProfilePhoto());
        //        adoptionStatusDto.setAdoptionDetail(adoption.get(i));
        //     }else{
        //         Organization organization =organizationRepository.findById(adoption.get(i).getRequesterId()).get();
        //         adoptionStatusDto.setLocation(organization.getLocation());
        //        adoptionStatusDto.setContactNumber(organization.getContactNumber());
        //        adoptionStatusDto.setEmail(organization.getEmail());
        //        adoptionStatusDto.setName(organization.getName());
        //        adoptionStatusDto.setProfileUrl(organization.getOrganizationPhoto());
        //        adoptionStatusDto.setAdoptionDetail(adoption.get(i));
        //     }
        //     list.add(adoptionStatusDto);
        // }
        return adoptionDetailsDao.getAdoptionStatus(posterId, status, page);
    }

    @Override
    public StatusMessage updateStatus(String posterId, String status) {
        StatusMessage statusMessage = new StatusMessage();
        adoptionDetailsDao.updateStatus(posterId, status);
        statusMessage.setMessage("success");
        return statusMessage;
    }
    
}
