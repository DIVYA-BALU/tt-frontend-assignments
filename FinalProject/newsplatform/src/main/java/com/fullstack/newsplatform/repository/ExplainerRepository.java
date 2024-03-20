package com.fullstack.newsplatform.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.fullstack.newsplatform.model.Explainers;
import com.fullstack.newsplatform.model.Status;

public interface ExplainerRepository extends MongoRepository<Explainers, String>{

	@Query(sort="{'date':-1}")
	Page<Explainers> findAllByStatus(Status status, Pageable pageable);

	List<Explainers> findAllByStatusOrderByViewsDesc(Status string, Direction desc);
}
