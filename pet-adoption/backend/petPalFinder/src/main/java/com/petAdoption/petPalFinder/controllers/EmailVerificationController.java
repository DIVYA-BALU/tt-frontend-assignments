package com.petAdoption.petPalFinder.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.petAdoption.petPalFinder.dto.OtpVerificaion;
import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.models.EmailVerification;
import com.petAdoption.petPalFinder.services.EmailVerificationService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin
@Controller
@RequestMapping(path = "email-verification")
public class EmailVerificationController {

    @Autowired
    EmailVerificationService emailVerificationService;
    
    @PostMapping
    public ResponseEntity<StatusMessage> sendMail(@RequestBody EmailVerification email) {
        System.out.println(email);
        return ResponseEntity.ok(emailVerificationService.sendSimpleMail(email));
    }

    @PostMapping("verify")
    public ResponseEntity<StatusMessage> verifyOTP(@RequestBody OtpVerificaion otpVerificaion) {
        return ResponseEntity.ok(emailVerificationService.verifyOtp(otpVerificaion));
    }
    
}
