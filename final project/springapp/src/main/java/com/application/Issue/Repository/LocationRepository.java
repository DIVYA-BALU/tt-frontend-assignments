package com.application.Issue.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.application.Issue.Model.Location;

@Repository
public interface LocationRepository extends MongoRepository<Location, String>{

	List<Location> findAllByUserId(String userId);
}
