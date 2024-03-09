package com.project.crowdfund.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.project.crowdfund.model.Funds;

@Repository
public interface FundsRepository extends MongoRepository<Funds, String> {

    List<Funds> findByFunderEmail(String email);

}
