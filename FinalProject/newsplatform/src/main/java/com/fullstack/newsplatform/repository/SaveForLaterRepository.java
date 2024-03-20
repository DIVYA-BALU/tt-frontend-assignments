package com.fullstack.newsplatform.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.fullstack.newsplatform.model.Article;
import com.fullstack.newsplatform.model.SaveForLater;
import com.fullstack.newsplatform.model.User;

public interface SaveForLaterRepository extends MongoRepository<SaveForLater, String>{

	List<SaveForLater> findByUser(User user);

	void deleteByArticle(Article article);

}
