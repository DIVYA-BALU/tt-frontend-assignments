package com.petAdoption.petPalFinder.repositorys;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.petAdoption.petPalFinder.models.SubscriptionPlan;

@Repository
public interface SubscriptionPlanRepository extends MongoRepository<SubscriptionPlan,String>{
    
}
