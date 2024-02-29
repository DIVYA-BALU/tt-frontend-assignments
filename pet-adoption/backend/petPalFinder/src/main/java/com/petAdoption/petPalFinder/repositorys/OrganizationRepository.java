package com.petAdoption.petPalFinder.repositorys;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.petAdoption.petPalFinder.models.Organization;

@Repository
public interface OrganizationRepository extends MongoRepository<Organization,String>{

    
}