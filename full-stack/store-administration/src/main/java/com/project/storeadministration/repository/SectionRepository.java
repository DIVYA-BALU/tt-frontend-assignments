package com.project.storeadministration.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.project.storeadministration.model.Section;

@Repository
public interface SectionRepository extends MongoRepository<Section, String>{

  Section findBy_id();
  
}
