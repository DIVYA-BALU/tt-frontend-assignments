package com.fullstack.newsplatform.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.fullstack.newsplatform.model.NewsSaveForLater;
import com.fullstack.newsplatform.model.User;

public interface NewsSaveForLaterRepository extends MongoRepository<NewsSaveForLater, String>{

	List<NewsSaveForLater> findByUser(User user);


}
