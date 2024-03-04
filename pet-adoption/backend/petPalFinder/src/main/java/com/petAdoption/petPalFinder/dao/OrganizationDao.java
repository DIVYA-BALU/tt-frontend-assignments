package com.petAdoption.petPalFinder.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Repository;

import com.petAdoption.petPalFinder.dto.StatusUpdateDto;
import com.petAdoption.petPalFinder.models.Organization;

import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

@Repository
public class OrganizationDao {
    @Autowired
    MongoTemplate template;

    public void updateStatus(StatusUpdateDto statusUpdateDto){
        Criteria criteria = Criteria.where("_id").is(statusUpdateDto.getId());
		Query query = new Query(criteria);
        Update update = new Update().set("status", statusUpdateDto.getStatus());
        template.updateFirst(query, update, Organization.class);
    }
}
