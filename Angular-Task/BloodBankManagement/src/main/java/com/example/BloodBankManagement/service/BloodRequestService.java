package com.example.BloodBankManagement.service;

import java.util.List;

import com.example.BloodBankManagement.exception.ResourceNotFoundException;
import com.example.BloodBankManagement.model.BloodRequest;

public interface BloodRequestService {
    List<BloodRequest> getAllBloodRequest() throws ResourceNotFoundException;
    BloodRequest getBloodRequestByRequestId(String requestId) throws ResourceNotFoundException;
    BloodRequest addBloodRequest(BloodRequest bloodRequest);
    BloodRequest updateBloodRequest(String requestId, BloodRequest bloodRequest) throws ResourceNotFoundException;
    void deleteBloodRequest(String requestId) throws ResourceNotFoundException;
    List<BloodRequest> getAllBloodRequestByEmail(String email);
    List<BloodRequest> acceptBloodRequestByEmail(String email);
    List<BloodRequest> rejectBloodRequestByEmail(String email);
}
