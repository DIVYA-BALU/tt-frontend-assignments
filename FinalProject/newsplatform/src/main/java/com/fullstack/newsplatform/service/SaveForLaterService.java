package com.fullstack.newsplatform.service;

import java.util.List;

import com.fullstack.newsplatform.model.SaveForLater;

public interface SaveForLaterService {

	List<SaveForLater> getAllSaved(String token);

	String saveArticle(String token, String id);

	String unsaveArticle(String id);

}
