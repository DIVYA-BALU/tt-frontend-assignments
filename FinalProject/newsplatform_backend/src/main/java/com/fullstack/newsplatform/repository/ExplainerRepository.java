package com.fullstack.newsplatform.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.fullstack.newsplatform.model.Explainers;

public interface ExplainerRepository extends MongoRepository<Explainers, String>{

	@Query(sort="{'date':-1}")
	Page<Explainers> findAllByStatus(String status, Pageable pageable);

	List<Explainers> findAllByStatusOrderByViewsDesc(String string, Direction desc);
}
