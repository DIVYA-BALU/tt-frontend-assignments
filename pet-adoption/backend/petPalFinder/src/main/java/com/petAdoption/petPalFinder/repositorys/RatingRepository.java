package com.petAdoption.petPalFinder.repositorys;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.petAdoption.petPalFinder.models.Rating;

public interface RatingRepository extends MongoRepository<Rating,String>{

    Rating findByVeterinaryDoctorId(String doctorId);
    
}
