package com.petAdoption.petPalFinder.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import com.petAdoption.petPalFinder.dto.StatusUpdateDto;
import com.petAdoption.petPalFinder.models.PetPost;
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

    public List<VeterinaryDoctor> recommendedVeterinaryDoctors(String name,String city,Integer page){
        Criteria criteria = Criteria.where("location.city").regex(city).andOperator(Criteria.where("name").regex(name),Criteria.where("status").is("accepted"));
		Query query = new Query(criteria);
        Pageable pageable = PageRequest.of(page, 10,Sort.by(Order.desc("rating")));
        query.with(pageable);
        return template.find(query, VeterinaryDoctor.class);
    }

    public void updateRating(String id,Integer value){
        Criteria criteria = Criteria.where("_id").is(id);
		Query query = new Query(criteria);
        VeterinaryDoctor veterinaryDoctor = template.find(query, VeterinaryDoctor.class).get(0);
        Double rating = veterinaryDoctor.getRating();
        if(rating == null){
            rating=0.00;
        }
        Integer raterCount = veterinaryDoctor.getRatersCount();
        if(raterCount == null){
            raterCount=0;
        }
        rating = (rating*raterCount + value )/(raterCount+1);
        Update update = new Update().set("rating", rating).inc("raterCount",1);
        template.updateFirst(query, update, VeterinaryDoctor.class);
    }

    public List<String> searchInput(String field, String value){
        if(field.equals("city")){
            field = "location.city";
        }
        Criteria criteria = Criteria.where(field).regex(value,"i");
		Query query = new Query(criteria);
                System.out.println(template.findDistinct(query,"category", VeterinaryDoctor.class, String.class));
        return template.findDistinct(query,field, VeterinaryDoctor.class, String.class);
    }
}
