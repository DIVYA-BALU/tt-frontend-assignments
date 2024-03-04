package com.petAdoption.petPalFinder.services;

import java.util.List;

import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.dto.StatusUpdateDto;
import com.petAdoption.petPalFinder.dto.VeterinaryDoctorDto;
import com.petAdoption.petPalFinder.models.VeterinaryDoctor;

public interface VeterinaryDoctorService {
    public StatusMessage save(VeterinaryDoctorDto veterinaryDoctorDto);
    public List<VeterinaryDoctor> getInitiatedVeterinaryDoctor();
    public List<VeterinaryDoctor> getNearByVeterinaryDoctor();
    public VeterinaryDoctor getApprovedVeterinaryDoctor();
    public StatusMessage updateStatus(StatusUpdateDto statusUpdateDto);
    public VeterinaryDoctor getVeterinaryDoctor(String id);
}
