package com.petAdoption.petPalFinder.repositorys;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.petAdoption.petPalFinder.models.VeterinaryDoctor;

public interface VeterinaryDoctorRepository extends MongoRepository<VeterinaryDoctor,String>{

    List<VeterinaryDoctor> findByStatus(String string);
    
}
