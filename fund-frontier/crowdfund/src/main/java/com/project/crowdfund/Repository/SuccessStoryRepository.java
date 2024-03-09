package com.project.crowdfund.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.project.crowdfund.model.SuccessStory;

@Repository
public interface SuccessStoryRepository extends MongoRepository<SuccessStory, String> {

}
