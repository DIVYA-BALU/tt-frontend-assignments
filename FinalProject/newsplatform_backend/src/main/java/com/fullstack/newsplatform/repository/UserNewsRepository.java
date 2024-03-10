package com.fullstack.newsplatform.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.fullstack.newsplatform.model.UserNews;

public interface UserNewsRepository extends MongoRepository<UserNews, String>{

	@Query(sort="{'date':-1}")
	Page<UserNews> findByStatus(String string, Pageable pageable);

}
