package com.fullstack.newsplatform.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.fullstack.newsplatform.model.Article;
import com.fullstack.newsplatform.model.Status;

public interface ArticleRepository extends MongoRepository<Article, String>{

	@Query(sort="{'date':-1}")
	Page<Article> findAllByStatus(Status status, Pageable pageable);

	@Query(sort="{'views':-1}")
	List<Article> findAllByViews();

	boolean existsByArticleUid(String articleUid);

	@Query(sort="{'date':-1}")
	List<Article> findAllByStatus(Status status);

}
