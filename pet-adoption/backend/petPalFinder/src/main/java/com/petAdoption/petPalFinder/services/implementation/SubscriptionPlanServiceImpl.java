package com.petAdoption.petPalFinder.services.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petAdoption.petPalFinder.models.SubscriptionPlan;
import com.petAdoption.petPalFinder.repositorys.SubscriptionPlanRepository;
import com.petAdoption.petPalFinder.services.SubscriptionPlanService;

@Service
public class SubscriptionPlanServiceImpl implements SubscriptionPlanService {

    @Autowired
    SubscriptionPlanRepository subscriptionPlanRepository;

    @Override
    public List<SubscriptionPlan> getPlans() {
        return subscriptionPlanRepository.findAll();
    }
    
}
