package com.project.storeadministration.repository;

import java.time.LocalDate;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.project.storeadministration.model.AttendanceDetail;

@Repository
public interface AttendanceDetailRepository extends MongoRepository<AttendanceDetail, String> {

}
