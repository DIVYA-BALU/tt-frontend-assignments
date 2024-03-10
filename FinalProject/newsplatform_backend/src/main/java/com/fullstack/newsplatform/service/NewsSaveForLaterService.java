package com.fullstack.newsplatform.service;

import java.util.List;

import com.fullstack.newsplatform.model.NewsSaveForLater;

public interface NewsSaveForLaterService {

	List<NewsSaveForLater> getAllSavedNews(String token);

	String saveNews(String token, String id);

	String unsaveNews(String id);

}
