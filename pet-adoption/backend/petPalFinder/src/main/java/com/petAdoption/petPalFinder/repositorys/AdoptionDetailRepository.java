package com.petAdoption.petPalFinder.repositorys;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.petAdoption.petPalFinder.models.AdoptionDetail;
import java.util.List;
import com.petAdoption.petPalFinder.models.PetPost;



public interface AdoptionDetailRepository extends MongoRepository<AdoptionDetail,String>{
    public List<AdoptionDetail> findByProfileId(String profileId);
    void deleteByPetPostId(PetPost petPostId);
}
