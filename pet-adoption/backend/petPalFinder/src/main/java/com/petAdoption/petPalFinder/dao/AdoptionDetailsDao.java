package com.petAdoption.petPalFinder.dao;

import java.util.Date;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.petAdoption.petPalFinder.dto.AppointmentUpdate;
import com.petAdoption.petPalFinder.models.AdoptionDetail;
import com.petAdoption.petPalFinder.models.AppointmentStatus;

@Repository
public class AdoptionDetailsDao {
    
    @Autowired
    MongoTemplate template;

    public List<AdoptionDetail> getAdoptionStatus(String id,String status,Integer page){
        Criteria criteria = Criteria.where("posterId").is(id).andOperator(Criteria.where("status").is(status));
		Query query = new Query(criteria);
        Pageable pageable = PageRequest.of(page, 10,Sort.by(Sort.Order.desc("requestDate")));
		query.with(pageable);
        return template.find(query, AdoptionDetail.class);
    }

     public void updateStatus(String id,String status){
        Criteria criteria = Criteria.where("_id").is(id);
		Query query = new Query(criteria);
        Update update = new Update().set("status", status);
        template.updateFirst(query, update, AdoptionDetail.class);
    }
}
