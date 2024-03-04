package com.petAdoption.petPalFinder.seeder;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import com.petAdoption.petPalFinder.models.SubscriptionPlan;
import com.petAdoption.petPalFinder.repositorys.SubscriptionPlanRepository;

@Component
public class SubscriptionPlanSeeder implements CommandLineRunner{

    @Autowired
    SubscriptionPlanRepository subscriptionPlanRepository;

    @Override
    public void run(String... args) throws Exception {
        System.out.println("seader out");
        if(subscriptionPlanRepository.count() == 0){
            Map<Integer,Double> plans = new HashMap<>();
            plans.put(1, 200.00);
            plans.put(6, 1100.00);
            plans.put(12, 2000.00);
            System.out.println("seader");
            for (Map.Entry<Integer,Double> plan : plans.entrySet()) 
            {  
                SubscriptionPlan subscriptionPlan = SubscriptionPlan.builder().amount(plan.getValue()).months(plan.getKey()).build();
                subscriptionPlanRepository.save(subscriptionPlan);   
            }  
        }
    }
    
}
