package com.petAdoption.petPalFinder.models;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(value = "subscription_transaction")
public class SubscriptionTransaction {
    @Id
    private String _id;
    @DocumentReference(collection = "subscription_plans")
    private SubscriptionPlan currentPlan; 
    private Date subscribedOn;
    private Date validTill;
    private String paymentId;
    private String subscriberId;
    private ArrayList<PreviousSubscripton> history;

}
