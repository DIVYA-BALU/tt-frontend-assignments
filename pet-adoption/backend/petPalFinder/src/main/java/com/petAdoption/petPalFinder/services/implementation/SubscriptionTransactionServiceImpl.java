package com.petAdoption.petPalFinder.services.implementation;

import java.util.Calendar;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petAdoption.petPalFinder.dao.VeterinaryDoctorDao;
import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.models.SubscriptionTransaction;
import com.petAdoption.petPalFinder.repositorys.SubscriptionTransactionRepository;
import com.petAdoption.petPalFinder.services.SubscriptionTransactionService;

@Service
public class SubscriptionTransactionServiceImpl implements SubscriptionTransactionService {
    @Autowired
    SubscriptionTransactionRepository subscriptionTransactionRepository;

    @Autowired
    VeterinaryDoctorDao veterinaryDoctorDao;

    @Override
    public StatusMessage subscribe(SubscriptionTransaction subscriptionTransaction) {
        StatusMessage statusMessage = new StatusMessage();
        Date date = new Date();
        Calendar cal = Calendar.getInstance();

        date = cal.getTime();
        System.out.println(date);
        cal.add(Calendar.DATE, subscriptionTransaction.getCurrentPlan().getMonths()*30);
        System.out.println(cal + "   "+ subscriptionTransaction.getCurrentPlan().getMonths()*30);
        
        cal.set(Calendar.HOUR_OF_DAY,0);
        cal.set(Calendar.MINUTE,0);
        cal.set(Calendar.SECOND,0);
        cal.set(Calendar.MILLISECOND,0);
        Date endDate = new Date();
        endDate = cal.getTime();
        System.out.println(endDate);
        subscriptionTransaction.setSubscribedOn(date);
        subscriptionTransaction.setValidTill(endDate);
        subscriptionTransactionRepository.save(subscriptionTransaction);
        veterinaryDoctorDao.updateSubscription(subscriptionTransaction.getSubscriberId());
        statusMessage.setMessage("success");
        return statusMessage;
    }

    @Override
    public void unSubscribeValidityExpiredUser(Date valiDate) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'unSubscribeValidityExpiredUser'");
    }
    
}
