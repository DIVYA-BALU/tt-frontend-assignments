package com.example.BloodBankManagement.service.impl;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.BloodBankManagement.exception.ResourceNotFoundException;
import com.example.BloodBankManagement.model.Donors;
import com.example.BloodBankManagement.repository.DonorRepository;
import com.example.BloodBankManagement.service.DonorService;

@Service
public class DonorServiceImpl implements DonorService {

    @Autowired
    private DonorRepository donorRepository;

    @Override
    public List<Donors> getAllDonors() {
        return donorRepository.findAll();
    }

    @Override
    public Donors getDonorByDonorId(String donorId) {
        return donorRepository.findByDonorId(donorId);
    }

    @Override
    public Donors addDonor(Donors donor) {
        donor.setDate(new Date());
        Donors addedDonor = donorRepository.findByDonorId(donor.getDonorId());

        if (addedDonor == null) {
            donorRepository.save(donor);
            return donor;
        } else {
            System.out.println("Donor Id already Presented "+addedDonor.getDonorId());
            return null;
        }
    }

    @Override
    public Donors updateDonor(String donorId, Donors donor) {
        Donors existingDonor = donorRepository.findByDonorId(donorId);
        existingDonor.setName(donor.getName());
        Donors updatedDonor = donorRepository.save(existingDonor);
        System.out.println("Donor updated successfully: " + updatedDonor.getName());
        return updatedDonor;
    }

    @Override
    public void deleteDonor(String donorId) {
        Donors existingDonor = donorRepository.findByDonorId(donorId);
        donorRepository.delete(existingDonor);
        System.out.println("Donor deleted sucessfully: " + existingDonor.getName());
    }

    public List<Donors> getDonorsByBloodGroup(String bloodGroup) {
        return donorRepository.findByBloodGroup(bloodGroup);
    }

    @Override
    public List<Donors> getDonorByCity(String city) {
        return donorRepository.findByCity(city);
    }
}