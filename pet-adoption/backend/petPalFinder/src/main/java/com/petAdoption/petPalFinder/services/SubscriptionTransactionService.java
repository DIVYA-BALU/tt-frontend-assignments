package com.petAdoption.petPalFinder.services;

import java.util.Date;

import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.models.SubscriptionTransaction;

public interface SubscriptionTransactionService {
    public StatusMessage subscribe(SubscriptionTransaction subscriptionTransaction);
    public void unSubscribeValidityExpiredUser(Date valiDate);
}
