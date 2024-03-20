package com.fullstack.newsplatform.service;

import java.io.IOException;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.fullstack.newsplatform.dto.UserNewsDTO;
import com.fullstack.newsplatform.model.UserNews;

@Service
public interface UserNewsService {

	String addMyNews(UserNewsDTO userNews) throws IOException;

	Page<UserNews> getUserNews(Pageable pageable);
	
	Page<UserNews> getUserNewsPendings(Pageable pageable);

	String updateRejectStatus(String id, String reason);

	String updateAcceptStatus(String id);

	UserNews getUserNewsById(String id);

	String completeAcceptStatus(String id);

}
