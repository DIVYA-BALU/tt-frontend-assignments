package com.example.BloodBankManagement.service;

import java.util.List;

import com.example.BloodBankManagement.exception.ResourceNotFoundException;
import com.example.BloodBankManagement.model.BloodDetails;

public interface BloodDetailsService {
    List<BloodDetails> getAllBloodDetails() throws ResourceNotFoundException;
    BloodDetails getBloodDetailsByBloodGroup(String bloodGroup) throws ResourceNotFoundException;
    String addBloodDetails(BloodDetails bloodDetails);
    BloodDetails updateBloodDetails(String bloodGroup, BloodDetails bloodDetails) throws ResourceNotFoundException;
    void deleteBloodDetails(String bloodGroup) throws ResourceNotFoundException;
    int getUnitsByEmail(String email);
    String updateBloodUnits(String email, Integer units);
    int getAllUnits();
}
