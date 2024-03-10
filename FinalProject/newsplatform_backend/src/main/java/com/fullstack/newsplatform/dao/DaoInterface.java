package com.fullstack.newsplatform.dao;

import java.util.List;

import com.fullstack.newsplatform.model.News;

public interface DaoInterface {

	List<News> searchNews(String search);

}
