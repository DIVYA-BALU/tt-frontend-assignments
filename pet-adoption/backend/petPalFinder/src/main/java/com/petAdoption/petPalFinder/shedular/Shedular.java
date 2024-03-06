package com.petAdoption.petPalFinder.shedular;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * Shedular
 */
@Component
@EnableScheduling
public class Shedular {

  
    @Scheduled(cron = "0 1 18 * * ?")
public void scheduleFixedDelayTask() {
    System.out.println(
      "Fixed delay task - " + System.currentTimeMillis() / 1000);
}
}