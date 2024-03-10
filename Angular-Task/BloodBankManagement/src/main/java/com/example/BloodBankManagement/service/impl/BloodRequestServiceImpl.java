package com.example.BloodBankManagement.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.BloodBankManagement.exception.ResourceNotFoundException;
import com.example.BloodBankManagement.model.BloodRequest;
import com.example.BloodBankManagement.repository.BloodRequestRepository;
import com.example.BloodBankManagement.service.BloodRequestService;

@Service
public class BloodRequestServiceImpl implements BloodRequestService{

    @Autowired
    private BloodRequestRepository bloodRequestRepository;

    @Override
    public List<BloodRequest> getAllBloodRequest() throws ResourceNotFoundException {
        List<BloodRequest> bloodRequests = bloodRequestRepository.findAll();
        if (bloodRequests.isEmpty()) {
            throw new ResourceNotFoundException("Blood Requests", "No records found", "");
        }
        return bloodRequests;
    }

    @Override
    public BloodRequest getBloodRequestByRequestId(String requestId) throws ResourceNotFoundException {
        return bloodRequestRepository.findByRequestId(requestId)
                .orElseThrow(() -> new ResourceNotFoundException("Blood Request", "id", requestId));
    }

    @Override
    public BloodRequest addBloodRequest(BloodRequest bloodRequest) {
        BloodRequest addedBloodRequest = bloodRequestRepository.save(bloodRequest);
        System.out.println("New blood request added successfully: " + addedBloodRequest.getName());
        return addedBloodRequest;
    }

    @Override
    public BloodRequest updateBloodRequest(String requestId, BloodRequest bloodRequest) throws ResourceNotFoundException {
        BloodRequest existingBloodRequest = getBloodRequestByRequestId(requestId);
        existingBloodRequest.setName(bloodRequest.getName());
        BloodRequest updatedBloodRequest = bloodRequestRepository.save(existingBloodRequest);
        System.out.println("Blood request updated successfully: " + updatedBloodRequest.getName());
        return updatedBloodRequest;
    }

    @Override
    public void deleteBloodRequest(String requestId) throws ResourceNotFoundException {
        BloodRequest existingBloodRequest = getBloodRequestByRequestId(requestId);
        bloodRequestRepository.delete(existingBloodRequest);
        System.out.println("Blood request deleted successfully: " + existingBloodRequest.getName());
    }

    @Override
    public List<BloodRequest> getAllBloodRequestByEmail(String email) {
        List<BloodRequest> bloodRequests = bloodRequestRepository.findAllByEmail(email);
        System.out.println("Blood Request"+bloodRequests);
        return bloodRequests;
    }

    @Override
    public List<BloodRequest> acceptBloodRequestByEmail(String email) {
        List<BloodRequest> bloodRequests = bloodRequestRepository.findAllByEmail(email);
        bloodRequests.forEach(request -> request.setStatus("Accepted"));
        bloodRequestRepository.saveAll(bloodRequests);
        return bloodRequests;
    }

    @Override
    public List<BloodRequest> rejectBloodRequestByEmail(String email) {
        List<BloodRequest> bloodRequests = bloodRequestRepository.findAllByEmail(email);
        bloodRequests.forEach(request -> request.setStatus("Rejected"));
        bloodRequestRepository.saveAll(bloodRequests);
        return bloodRequests;
    }

}
