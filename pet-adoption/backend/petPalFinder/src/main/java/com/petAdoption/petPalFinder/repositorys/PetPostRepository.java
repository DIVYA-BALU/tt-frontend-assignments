package com.petAdoption.petPalFinder.repositorys;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.petAdoption.petPalFinder.models.PetPost;

@Repository
public interface PetPostRepository extends MongoRepository<PetPost,String>{

    List<PetPost> findByPosterId(ObjectId posterId);
    
}
