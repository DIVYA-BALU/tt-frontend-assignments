package com.fullstack.newsplatform.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.fullstack.newsplatform.model.ShortReads;

public interface ShortReadsRepository extends MongoRepository<ShortReads, String>{

	@Query(sort="{'views':-1}")
	List<ShortReads> findAllByViews();

	@Query(sort="{'date':-1}")
	Page<ShortReads> findAllByStatus(String status, Pageable pageable);

	List<ShortReads> findAllByStatusOrderByViewsDesc(String string, Direction desc);

}
