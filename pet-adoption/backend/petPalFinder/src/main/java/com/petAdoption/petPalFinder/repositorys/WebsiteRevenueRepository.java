package com.petAdoption.petPalFinder.repositorys;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.petAdoption.petPalFinder.models.WebsiteRevenue;

public interface WebsiteRevenueRepository extends MongoRepository<WebsiteRevenue,String>{
    
}
