package com.petAdoption.petPalFinder.services.implementation;

import java.util.Date;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.petAdoption.petPalFinder.dto.OtpVerificaion;
import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.models.EmailVerification;
import com.petAdoption.petPalFinder.repositorys.EmailVerificationRepository;
import com.petAdoption.petPalFinder.services.EmailVerificationService;

@Service
public class EmailVerificationServiceImpl implements EmailVerificationService{
    @Autowired
    EmailVerificationRepository emailVerificationRepository;
    @Autowired private JavaMailSender javaMailSender;
 
    @Value("${spring.mail.username}") private String sender;
 
    // Method 1
    // To send a simple email
    public StatusMessage sendSimpleMail(EmailVerification email)
    {
        StatusMessage statusMessage = new StatusMessage();
 
        // Try block to check for exceptions
        try {

            emailVerificationRepository.deleteByEmail(email.getEmail());
            Random rnd = new Random();

            SimpleMailMessage mailMessage = new SimpleMailMessage();

            email.setOtp(rnd.nextInt(900000)+100000);
            Date generatedTime = new Date();
            email.setCreatedDate(generatedTime);
            long newTime = generatedTime.getTime() + (5 * 60 * 1000); 
            email.setValidTill(new Date(newTime));
            mailMessage.setFrom(sender);
            mailMessage.setTo(email.getEmail());
            mailMessage.setText("Dear User, \n your are welcomed to our website \n your OTP is " + email.getOtp().toString());
            mailMessage.setSubject("OTP for PetPalFinder");

            javaMailSender.send(mailMessage);
            emailVerificationRepository.save(email);
            statusMessage.setMessage("Mail Sent Successfully");
            
        }
         catch (Exception e) {
            e.printStackTrace();
            statusMessage.setMessage("Error while Sending Mail");
        }
        return statusMessage;
    }
    public StatusMessage verifyOtp(OtpVerificaion otpVerificaion){
        StatusMessage statusMessage = new StatusMessage();
        EmailVerification emailVerification = emailVerificationRepository.findByEmail(otpVerificaion.getEmail()).get();
        System.out.println(emailVerification.getOtp().getClass().getName() + " " + otpVerificaion.getOtp().getClass().getName());
        System.out.println(emailVerification.getOtp() + " " + otpVerificaion.getOtp());
        if(emailVerification.getOtp().equals(otpVerificaion.getOtp())){
            System.out.println(emailVerification.getCreatedDate().compareTo(new Date()) + " " + emailVerification.getCreatedDate() + " " + new Date());
            if(emailVerification.getValidTill().compareTo(new Date()) >=   0){
                statusMessage.setMessage("otp verified");
            }
            else{
                statusMessage.setMessage("otp time has exceed");
            }
        }else{
            statusMessage.setMessage("invalid otp");
        }
        return statusMessage;
    }
}
