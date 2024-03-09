package com.petAdoption.petPalFinder.repositorys;

import com.petAdoption.petPalFinder.models.AppointmentStatus;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface AppointmentStatusRepository extends MongoRepository<AppointmentStatus,String>{
    List<AppointmentStatus> findByDoctorId(ObjectId doctorId);
    List<AppointmentStatus> findByRequesterId(String requesterId);
    
}
