package com.project.storeadministration.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.project.storeadministration.model.Branch;

@Repository
public interface BranchRepository extends MongoRepository<Branch, String> {
  Optional<Branch> findBy_id(String _id);
}
