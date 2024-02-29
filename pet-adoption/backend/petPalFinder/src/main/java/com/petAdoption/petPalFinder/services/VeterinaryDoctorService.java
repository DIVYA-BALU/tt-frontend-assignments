package com.petAdoption.petPalFinder.services;

import java.util.List;

import com.petAdoption.petPalFinder.dto.OrganizationRegistrationDto;
import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.dto.VeterinaryDoctorDto;
import com.petAdoption.petPalFinder.models.Organization;
import com.petAdoption.petPalFinder.models.VeterinaryDoctor;

public interface VeterinaryDoctorService {
    public StatusMessage save(VeterinaryDoctorDto veterinaryDoctorDto);
    public List<VeterinaryDoctor> getInitiatedVeterinaryDoctorDto();
    public VeterinaryDoctor getApprovedVeterinaryDoctorDto();
}
