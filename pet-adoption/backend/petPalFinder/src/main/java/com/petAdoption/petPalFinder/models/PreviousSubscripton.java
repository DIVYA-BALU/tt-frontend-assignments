package com.petAdoption.petPalFinder.models;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.DocumentReference;

import lombok.Data;

@Data
public class PreviousSubscripton {
    @DocumentReference(collection = "subscription_plans")
        private SubscriptionPlan plan; 
        private Date subscribedOn;
        private String paymentId;
}
