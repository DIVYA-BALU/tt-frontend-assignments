package com.fullstack.newsplatform.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fullstack.newsplatform.jwtService.JwtService;
import com.fullstack.newsplatform.model.Article;
import com.fullstack.newsplatform.model.SaveForLater;
import com.fullstack.newsplatform.model.User;
import com.fullstack.newsplatform.repository.ArticleRepository;
import com.fullstack.newsplatform.repository.SaveForLaterRepository;
import com.fullstack.newsplatform.repository.UserRepository;
import com.fullstack.newsplatform.service.SaveForLaterService;

@Service
public class SaveForLaterServiceImpl implements SaveForLaterService{

	@Autowired
	JwtService jwtService;
	
	@Autowired
	SaveForLaterRepository repository;
	
	@Autowired
	UserRepository repo;
	
	@Autowired
	ArticleRepository repo1;
	
	@Override
	public List<SaveForLater> getAllSaved(String token) {
		String email = jwtService.extractUsername(token);
		User user = repo.findByemail(email);
		return repository.findByUser(user);
	}

	@Override
	public String saveArticle(String token, String id) {
		String email = jwtService.extractUsername(token);
		User user = repo.findByemail(email);
		Optional<Article> article = repo1.findById(id);
		
		SaveForLater saveForLater = SaveForLater.builder().user(user).article(article.get()).build();
		repository.save(saveForLater);
		
		article.get().setSaved(true);
		repo1.save(article.get());
		
		return "Successfully Saved";
	}

	@Override
	public String unsaveArticle(String id) {
		Optional<Article> article = repo1.findById(id);
		repository.deleteByArticle(article.get());
		
		article.get().setSaved(false);
		repo1.save(article.get());
		return "Unsaved";
	}

}
