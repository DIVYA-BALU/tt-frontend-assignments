package com.project.crowdfund.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.project.crowdfund.model.Funder;

@Repository
public interface FunderRepository extends MongoRepository<Funder, String> {

    Funder findByEmail(String email);

}
