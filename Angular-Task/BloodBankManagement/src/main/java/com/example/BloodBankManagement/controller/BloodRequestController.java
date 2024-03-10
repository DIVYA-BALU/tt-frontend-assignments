package com.example.BloodBankManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.BloodBankManagement.exception.ResourceNotFoundException;
import com.example.BloodBankManagement.model.BloodRequest;
import com.example.BloodBankManagement.service.BloodRequestService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/blood-requests")
public class BloodRequestController {
    
    @Autowired
    private BloodRequestService bloodRequestService;

    @GetMapping("/getTotalRequests")
    // @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<BloodRequest>> getAllBloodRequests() {
        List<BloodRequest> bloodRequests = bloodRequestService.getAllBloodRequest();
        return new ResponseEntity<>(bloodRequests, HttpStatus.OK);
    }

    @GetMapping("/getTotalRequest/{email}")
    public ResponseEntity<List<BloodRequest>> getAllBloodRequestByEmail(@PathVariable String email) {

        try {
        List<BloodRequest> bloodRequests = bloodRequestService.getAllBloodRequestByEmail(email);
        return new ResponseEntity<>(bloodRequests, HttpStatus.OK);
        
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Error"+ e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{requestId}")
    // @PreAuthorize("hasRole('ADMIN', 'USER')")
    public ResponseEntity<BloodRequest> getBloodRequestByRequestId(@PathVariable String requestId) {
        BloodRequest bloodRequest = bloodRequestService.getBloodRequestByRequestId(requestId);
        return new ResponseEntity<>(bloodRequest, HttpStatus.OK);
    }

    @PostMapping
    // @PreAuthorize("hasRole('USER')")
    public ResponseEntity<BloodRequest> addBloodRequest(@RequestBody BloodRequest bloodRequest) {
        BloodRequest addedBloodRequest = bloodRequestService.addBloodRequest(bloodRequest);
        return new ResponseEntity<>(addedBloodRequest, HttpStatus.CREATED);
    }

    // @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/accept/{email}")
    public ResponseEntity<List<BloodRequest>> acceptBloodRequestByEmail(@PathVariable String email) {
        List<BloodRequest> acceptedBloodRequests = bloodRequestService.acceptBloodRequestByEmail(email);
        return new ResponseEntity<>(acceptedBloodRequests, HttpStatus.OK);
    }

    // @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/reject/{email}")
    public ResponseEntity<List<BloodRequest>> rejectBloodRequestByEmail(@PathVariable String email) {
        List<BloodRequest> rejectBloodRequests = bloodRequestService.rejectBloodRequestByEmail(email);
        return new ResponseEntity<>(rejectBloodRequests, HttpStatus.OK);
    }

    @PutMapping("/{requestId}")
    public ResponseEntity<BloodRequest> updateBloodRequest(@PathVariable String requestId, @RequestBody BloodRequest bloodRequest) {
        BloodRequest updatedBloodRequest = bloodRequestService.updateBloodRequest(requestId, bloodRequest);
        return new ResponseEntity<>(updatedBloodRequest, HttpStatus.OK);
    }

    @DeleteMapping("/{requestId}")
    // @PreAuthorize("hasRole('ADMIN', 'USER')")
    public ResponseEntity<String> deleteBloodRequest(@PathVariable String requestId) {
        bloodRequestService.deleteBloodRequest(requestId);
        return new ResponseEntity<>("Blood request with id " + requestId + " has been deleted", HttpStatus.OK);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<String> handleResourceNotFoundException(ResourceNotFoundException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }
}