package com.fullstack.newsplatform.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fullstack.newsplatform.jwtService.JwtService;
import com.fullstack.newsplatform.model.News;
import com.fullstack.newsplatform.model.NewsSaveForLater;
import com.fullstack.newsplatform.model.User;
import com.fullstack.newsplatform.repository.NewsRepository;
import com.fullstack.newsplatform.repository.NewsSaveForLaterRepository;
import com.fullstack.newsplatform.repository.UserRepository;
import com.fullstack.newsplatform.service.NewsSaveForLaterService;

@Service
public class NewsSaveForLaterServiceImpl implements NewsSaveForLaterService{
	
	@Autowired
	JwtService jwtService;
	
	@Autowired
	NewsSaveForLaterRepository repository;
	
	@Autowired
	UserRepository repo;
	
	@Autowired
	NewsRepository repo1;

	@Override
	public List<NewsSaveForLater> getAllSavedNews(String token) {
		String email = jwtService.extractUsername(token);
		User user = repo.findByemail(email);
		return repository.findByUser(user);
	}

	@Override
	public String saveNews(String token, String id) {
		String email = jwtService.extractUsername(token);
		User user = repo.findByemail(email);
		Optional<News> news = repo1.findById(id);
		
		NewsSaveForLater newsSaveForLater = NewsSaveForLater.builder().user(user).news(news.get()).build();
		repository.save(newsSaveForLater);
		return "Successfully Saved";
	}

	@Override
	public String unsaveNews(String id) {
		repository.deleteById(id);
		return "Unsaved";
	}

}
