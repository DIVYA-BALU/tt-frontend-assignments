package com.petAdoption.petPalFinder.repositorys;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.petAdoption.petPalFinder.models.PetPost;

public interface PetPostRepository extends MongoRepository<PetPost,String>{
    
}
