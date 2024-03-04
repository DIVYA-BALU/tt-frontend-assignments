package com.petAdoption.petPalFinder.repositorys;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.petAdoption.petPalFinder.models.SubscriptionTransaction;
import java.util.List;
import java.util.Date;

@Repository
public interface SubscriptionTransactionRepository extends MongoRepository<SubscriptionTransaction,String>{
    List<SubscriptionTransaction> findBySubscriberId(String subscriberId);
    List<SubscriptionTransaction> findByValidTillLessThanEqual(Date validTill);
}
