package com.project.storeadministration.repository;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.project.storeadministration.model.LeaveDetail;

@Repository
public interface LeaveDetailRepository extends MongoRepository<LeaveDetail, String> {

  Optional<LeaveDetail> findByDate(LocalDate date);

}
