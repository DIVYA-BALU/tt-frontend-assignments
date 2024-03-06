package com.petAdoption.petPalFinder.shedular;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.petAdoption.petPalFinder.services.SubscriptionTransactionService;

@Component
@EnableScheduling
public class SubscriptionScheduler {

    @Autowired
    SubscriptionTransactionService subscriptionTransactionService;

    @Scheduled(cron = "0 0 0 * * ?")
    public void unsubscribe() {
        subscriptionTransactionService.unSubscribeValidityExpiredUser(new Date());
        System.out.println(
                "Fixed delay task - ");
    }
}
