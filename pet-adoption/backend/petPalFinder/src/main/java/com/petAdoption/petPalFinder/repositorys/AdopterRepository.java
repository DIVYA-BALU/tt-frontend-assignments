package com.petAdoption.petPalFinder.repositorys;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.petAdoption.petPalFinder.models.Adopter;

@Repository
public interface AdopterRepository extends MongoRepository<Adopter,String>{
    
}
