package com.petAdoption.petPalFinder.shedular;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.petAdoption.petPalFinder.services.EmailVerificationService;

/**
 * OtpClearingScheduler
 */
@Component
@EnableScheduling
public class OtpClearingScheduler {

    @Autowired
    EmailVerificationService emailVerificationService;


    @Scheduled(cron = "0 22 18 * * ?")
    public void scheduleFixedDelayTask() {
       emailVerificationService.deleteAllOtp();
       System.out.println("deleted");
    }
}