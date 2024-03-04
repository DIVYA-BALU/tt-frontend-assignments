package com.petAdoption.petPalFinder.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.petAdoption.petPalFinder.models.SubscriptionPlan;
import com.petAdoption.petPalFinder.services.SubscriptionPlanService;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
@CrossOrigin
@RequestMapping(path = "subscription-plans")
public class SubscriptionPlanController {
    
    @Autowired
    SubscriptionPlanService subscriptionPlanService;

    @GetMapping
    public ResponseEntity<List<SubscriptionPlan>> getPlans() {
        return ResponseEntity.ok(subscriptionPlanService.getPlans());
    }
    
}
