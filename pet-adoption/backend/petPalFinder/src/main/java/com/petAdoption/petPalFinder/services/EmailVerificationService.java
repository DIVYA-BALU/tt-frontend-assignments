package com.petAdoption.petPalFinder.services;

import com.petAdoption.petPalFinder.dto.OtpVerificaion;
import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.dto.StatusUpdateDto;
import com.petAdoption.petPalFinder.models.EmailVerification;

public interface EmailVerificationService {
    public StatusMessage sendSimpleMail(EmailVerification email);
    public StatusMessage verifyOtp(OtpVerificaion otpVerificaion);
    public void sendStatusMail(String email, StatusUpdateDto status, String role);
}
