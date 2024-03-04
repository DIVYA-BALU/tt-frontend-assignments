package com.petAdoption.petPalFinder.dao;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import com.petAdoption.petPalFinder.dto.AppointmentUpdate;
import com.petAdoption.petPalFinder.dto.StatusUpdateDto;
import com.petAdoption.petPalFinder.models.AppointmentStatus;

@Repository
public class AppointmentStatusDao {
    
    @Autowired
    MongoTemplate template;

    public List<AppointmentStatus> getInitiatedRequest(String id){
        Criteria criteria = Criteria.where("requesterId").is(id).andOperator(Criteria.where("status").is("initiated"));
		Query query = new Query(criteria);
        return template.find(query, AppointmentStatus.class);
    }

    public List<AppointmentStatus> getAcceptedRequest(String id){
        Criteria criteria = Criteria.where("requesterId").is(id).andOperator(Criteria.where("status").is("accepted"));
		Query query = new Query(criteria);
        return template.find(query, AppointmentStatus.class);
    }

    public void updateStatus(AppointmentUpdate appointmentUpdate){
        Criteria criteria = Criteria.where("_id").is(appointmentUpdate.getId());
		Query query = new Query(criteria);
        Update update = new Update().set("status", appointmentUpdate.getStatus()).set("appointmentDate", appointmentUpdate.getDate()).set("acceptOrRejectedDate", new Date());
        template.updateFirst(query, update, AppointmentStatus.class);
    }
}
