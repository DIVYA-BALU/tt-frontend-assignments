package com.petAdoption.petPalFinder.services.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.dto.VeterinaryDoctorDto;
import com.petAdoption.petPalFinder.models.Organization;
import com.petAdoption.petPalFinder.models.VeterinaryDoctor;
import com.petAdoption.petPalFinder.repositorys.VeterinaryDoctorRepository;
import com.petAdoption.petPalFinder.services.FileService;
import com.petAdoption.petPalFinder.services.VeterinaryDoctorService;

@Service
public class VeterinaryDoctorServiceImpl implements VeterinaryDoctorService{

    @Autowired
    VeterinaryDoctorRepository veterinaryDoctorRepository;

    @Autowired
    FileService fileService;

    @Override
    public StatusMessage save(VeterinaryDoctorDto veterinaryDoctorDto) {
        StatusMessage statusMessage = new StatusMessage();
        String profileUrl = fileService.saveFile(veterinaryDoctorDto.getProfilePhoto(), "doctor-profile");
        String certificateUrl = fileService.saveFile(veterinaryDoctorDto.getDegreeCertificate(), "doctor-certificate");
        VeterinaryDoctor veterinaryDoctor = VeterinaryDoctor.builder().name(veterinaryDoctorDto.getName())
                .contactNumber(veterinaryDoctorDto.getContactNumber())
                .location(veterinaryDoctorDto.getLocation())
                .email(veterinaryDoctorDto.getEmail())
                .status(veterinaryDoctorDto.getStatus())
                .degree(veterinaryDoctorDto.getDegree())
                .degreeCertificate(certificateUrl)
                .isSubscribed(veterinaryDoctorDto.getIsSubscribed())
                .profilePhoto(profileUrl)
                .build();
        veterinaryDoctorRepository.save(veterinaryDoctor);
        statusMessage.setMessage("data saved");
        return statusMessage;
    }

    @Override
    public List<VeterinaryDoctor> getInitiatedVeterinaryDoctorDto() {
        return veterinaryDoctorRepository.findByStatus("initiated");
    }

    @Override
    public VeterinaryDoctor getApprovedVeterinaryDoctorDto() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getApprovedVeterinaryDoctorDto'");
    }
    
}
