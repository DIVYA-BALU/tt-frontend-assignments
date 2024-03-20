package com.fullstack.newsplatform.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.fullstack.newsplatform.model.ShortReads;
import com.fullstack.newsplatform.model.Status;

public interface ShortReadsRepository extends MongoRepository<ShortReads, String>{

	@Query(sort="{'views':-1}")
	List<ShortReads> findAllByViews();

	@Query(sort="{'date':-1}")
	Page<ShortReads> findAllByStatus(Status status, Pageable pageable);

	List<ShortReads> findAllByStatusOrderByViewsDesc(Status status, Direction desc);

}
