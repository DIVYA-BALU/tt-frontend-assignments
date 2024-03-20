package com.fullstack.newsplatform.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.fullstack.newsplatform.model.Category;
import com.fullstack.newsplatform.model.News;
import com.fullstack.newsplatform.model.Status;

public interface NewsRepository extends MongoRepository<News, String>{

	@Query(sort = "{'date':-1}")
	Page<News> findAllByStatus(Status status, Pageable pageable);

	@Query(value = "{'status': 'ACCEPTED', 'date': ?0}")
	List<News> findAllByDate(Date date);

	@Query(sort = "{'date':-1}")
	List<News> findAllByCategory(Category category);

	@Query(sort = "{'views': 1}")
	List<News> findAllByViews();

	@Query(sort = "{'date':-1}")
	List<News> findAllByStatus(Status status);
	
	@Query(value = "{'status': 'ACCEPTED'}")
	List<News> findByDateBetween(Date startOfDay, Date endOfDay);

	@Query(value = "{'status': 'ACCEPTED'}")
	List<News> findAllByOrderByViewsDesc();

	List<News> findAllByStatusOrderByViewsDesc(Status status, Direction desc);

}
