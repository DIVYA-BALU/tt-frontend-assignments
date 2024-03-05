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
import com.petAdoption.petPalFinder.dto.StatusUpdateDto;
import com.petAdoption.petPalFinder.models.EmailVerification;
import com.petAdoption.petPalFinder.repositorys.EmailVerificationRepository;
import com.petAdoption.petPalFinder.services.EmailVerificationService;
import com.petAdoption.petPalFinder.services.UserService;

@Service
public class EmailVerificationServiceImpl implements EmailVerificationService{
    @Autowired
    EmailVerificationRepository emailVerificationRepository;

    @Autowired 
    private JavaMailSender javaMailSender;


    @Autowired
    UserService userService;
 
    @Value("${spring.mail.username}") private String sender;
 
    // Method 1
    // To send a simple email
    public StatusMessage sendSimpleMail(EmailVerification email)
    {
        StatusMessage statusMessage = new StatusMessage();
 
        

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
          
        return statusMessage;
    }

    public StatusMessage verifyOtp(OtpVerificaion otpVerificaion){
        StatusMessage statusMessage = new StatusMessage();
        EmailVerification emailVerification = emailVerificationRepository.findByEmail(otpVerificaion.getEmail());
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

    public void sendStatusMail(String email, StatusUpdateDto status, String role){
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setFrom(sender);
        mail.setTo(email);
        mail.setSubject("Registration Status");
        String body;
        if(status.getStatus().equals("accepted") ){
            String password = generatePassword();
            userService.saveUser(email, password, role, status.getId());
            body = "Your Registration has done successfully\n password: " + password + " \n you can login using given password";
        }
        else{
            body = "Your registration has cancelled because of some data you provided look like not proper \n sorry for the inconvenience";
        }
        mail.setText(body);
        javaMailSender.send(mail);
    }

    public String generatePassword() {
        String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        StringBuilder stringBuilder = new StringBuilder();
        Random rnd = new Random();
        while (stringBuilder.length() < 10) { 
            int index = (int) (rnd.nextFloat() * chars.length());
            stringBuilder.append(chars.charAt(index));
        }
        String password = stringBuilder.toString();
        return password;
    }
}
