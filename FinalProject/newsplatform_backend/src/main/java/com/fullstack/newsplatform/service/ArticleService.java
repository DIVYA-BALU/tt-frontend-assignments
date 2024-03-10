package com.fullstack.newsplatform.service;

import java.io.IOException;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.fullstack.newsplatform.dto.ArticleDTO;
import com.fullstack.newsplatform.model.Article;

public interface ArticleService {

	Page<Article> getArticles(Pageable pageable);

	Article getArticle(String id);

	String editArticle(Article article);

	String deleteArticle(String id);

	String updateRejectStatus(String id, String reason);

	String updateAcceptStatus(String id);

	void increaseViews(String id);

	List<Article> getPopularArticles();

	String addArticle(ArticleDTO article) throws IOException;

	Page<Article> getRejectedArticles(Pageable pageable);

	Page<Article> getPendingArticles(Pageable pageable);

}
