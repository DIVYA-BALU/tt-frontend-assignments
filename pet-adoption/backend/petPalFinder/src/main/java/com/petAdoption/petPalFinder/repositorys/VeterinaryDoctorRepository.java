package com.petAdoption.petPalFinder.repositorys;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.petAdoption.petPalFinder.models.VeterinaryDoctor;

public interface VeterinaryDoctorRepository extends MongoRepository<VeterinaryDoctor,String>{
    
}
