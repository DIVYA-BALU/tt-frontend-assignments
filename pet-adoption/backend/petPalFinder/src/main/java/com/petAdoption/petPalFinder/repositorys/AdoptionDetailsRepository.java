package com.petAdoption.petPalFinder.repositorys;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.petAdoption.petPalFinder.models.AdoptionDetails;

public interface AdoptionDetailsRepository extends MongoRepository<AdoptionDetails,String>{
    
}
