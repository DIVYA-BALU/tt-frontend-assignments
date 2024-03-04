package com.petAdoption.petPalFinder.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.models.SubscriptionTransaction;
import com.petAdoption.petPalFinder.services.SubscriptionTransactionService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@Controller
@CrossOrigin
@RequestMapping(path = "subscription")
public class SubscriptionTransactionController {

    @Autowired
    SubscriptionTransactionService subscriptionTransactionService;
    
    @PostMapping
    public ResponseEntity<StatusMessage> subscribe(@RequestBody SubscriptionTransaction subscriptionTransaction) {
        return ResponseEntity.ok(subscriptionTransactionService.subscribe(subscriptionTransaction));
    }
    
}
