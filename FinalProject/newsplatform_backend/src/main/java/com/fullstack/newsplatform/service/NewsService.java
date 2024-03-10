package com.fullstack.newsplatform.service;

import java.io.IOException;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.fullstack.newsplatform.dto.NewsDTO;
import com.fullstack.newsplatform.model.News;

@Service
public interface NewsService {

	String editNews(News news);

	List<News> getAllNews();

	News getNews(String id);

	String deleteNews(String id);

	String updateRejectStatus(String id, String reason);

	String updateAcceptStatus(String id);

	List<News> getTodayNews();

	List<News> getBreakingNews();

	void increaseViews(String id);

	List<News> getPopularNews();

	String addNews(NewsDTO news) throws IOException;

	List<News> searchNews(String search);

	Page<News> getRejectedNews(Pageable pageable);

	Page<News> getPendingNews(Pageable pageable);

	List<News> getCategory(String value);

	List<News> getSensationalNews();

}
