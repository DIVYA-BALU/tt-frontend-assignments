package com.petAdoption.petPalFinder.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import com.petAdoption.petPalFinder.dto.StatusUpdateDto;
import com.petAdoption.petPalFinder.models.VeterinaryDoctor;

@Repository
public class VeterinaryDoctorDao {
    @Autowired
    MongoTemplate template;

    public void updateStatus(StatusUpdateDto statusUpdateDto){
        Criteria criteria = Criteria.where("_id").is(statusUpdateDto.getId());
		Query query = new Query(criteria);
        Update update = new Update().set("status", statusUpdateDto.getStatus());
        template.updateFirst(query, update, VeterinaryDoctor.class);
    }

    public void updateSubscription(String id,Boolean value){
        Criteria criteria = Criteria.where("_id").is(id);
		Query query = new Query(criteria);
        Update update = new Update().set("isSubscribed", value);
        template.updateFirst(query, update, VeterinaryDoctor.class);
    }
}
