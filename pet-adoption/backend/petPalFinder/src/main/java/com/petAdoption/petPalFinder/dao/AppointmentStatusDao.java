package com.petAdoption.petPalFinder.dao;

import java.util.Date;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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

    public List<AppointmentStatus> getInitiatedRequest(String id,String status){
        Criteria criteria = Criteria.where("doctorId").is(new ObjectId(id)).andOperator(Criteria.where("status").is(status));
		Query query = new Query(criteria);
        if(status.equals("accepted"))
        query.with(Sort.by(Sort.Order.asc("appointmentDate")));
        else
        query.with(Sort.by(Sort.Order.asc("requestedDate")));
        return template.find(query, AppointmentStatus.class);
    }

    public List<AppointmentStatus> getAcceptedRequest(String id){
        Criteria criteria = Criteria.where("doctorId").is(id).andOperator(Criteria.where("status").is("accepted"));
		Query query = new Query(criteria);
		query.with(Sort.by(Sort.Order.desc("appointmentDate")));
        return template.find(query, AppointmentStatus.class);
    }

    public void updateStatus(AppointmentUpdate appointmentUpdate){
        Criteria criteria = Criteria.where("_id").is(appointmentUpdate.getId());
		Query query = new Query(criteria);
        Update update = new Update().set("status", appointmentUpdate.getStatus()).set("appointmentDate", appointmentUpdate.getDate()).set("acceptOrRejectedDate", new Date());
        template.updateFirst(query, update, AppointmentStatus.class);
    }

    public List<AppointmentStatus> getStatusByRequesterId(String id){
        Criteria criteria = Criteria.where("requesterId").is(id);
		Query query = new Query(criteria);
		query.with(Sort.by(Sort.Order.desc("requestedDate")));
        return template.find(query, AppointmentStatus.class);
    }
}
