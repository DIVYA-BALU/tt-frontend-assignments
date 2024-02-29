package com.petAdoption.petPalFinder.services.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petAdoption.petPalFinder.dto.AdopterDto;
import com.petAdoption.petPalFinder.models.Adopter;
import com.petAdoption.petPalFinder.repositorys.AdopterRepository;
import com.petAdoption.petPalFinder.services.AdopterService;
import com.petAdoption.petPalFinder.services.FileService;

@Service
public class AdopterServiceImpl implements AdopterService {

    @Autowired
    FileService fileService;

    @Autowired
    AdopterRepository adopterRepository;

    @Override
    public Adopter updateAdopter(AdopterDto adopterDto) {
        String url = fileService.saveFile(adopterDto.getProfilePhoto(), "adopter_profile");
        Adopter adopter = Adopter.builder()._id(adopterDto.getId()).location(adopterDto.getLocation())
                .contactNumber(adopterDto.getContactNumber()).dob(adopterDto.getDob()).name(adopterDto.getName())
                .occupation(adopterDto.getOccupation()).profilePhoto(url).build();
            System.out.println(adopter + " " +adopterDto.getId());
        return adopterRepository.save(adopter);
    }

    @Override
    public Adopter getAdopter(String id) {
        return adopterRepository.findById(id).get();
    }

    @Override
    public Adopter getAdopterByName(String name) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAdopterByName'");
    }

}
