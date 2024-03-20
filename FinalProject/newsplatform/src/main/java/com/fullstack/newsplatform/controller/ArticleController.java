package com.fullstack.newsplatform.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.newsplatform.dto.ArticleDTO;
import com.fullstack.newsplatform.model.Article;
import com.fullstack.newsplatform.service.ArticleService;

@RestController
@RequestMapping("/article")
public class ArticleController {
	
	@Autowired
	ArticleService service;

	@CrossOrigin(origins = "http://localhost:4200")
//	@PreAuthorize("hasAuthority('WRITE_ARTICLE')")
	@PostMapping("/add-Article")
	public String addArticle(@ModelAttribute ArticleDTO article) throws IOException {
		return service.addArticle(article);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/get-all-article")
	public Page<Article> getArticles(@RequestParam int pageIndex, @RequestParam int pageSize) {
		Pageable pageable = PageRequest.of(pageIndex, pageSize);
		return service.getArticles(pageable);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/get-rejected-article")
	public Page<Article> getRejectedArticles(@RequestParam int pageIndex, @RequestParam int pageSize) {
		Pageable pageable = PageRequest.of(pageIndex, pageSize);
		return service.getRejectedArticles(pageable);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/get-pending-article")
	public Page<Article> getPendingArticles(@RequestParam int pageIndex, @RequestParam int pageSize) {
		Pageable pageable = PageRequest.of(pageIndex, pageSize);
		return service.getPendingArticles(pageable);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/get-article/{id}")
	public Article getArticle(@PathVariable String id) {
		return service.getArticle(id);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/increaseViews/{id}")
	public void increaseViews(@PathVariable String id) {
		service.increaseViews(id);
	}
	
	@GetMapping("/getPopularArticle")
	public List<Article> getPopularArticles() {
		return service.getPopularArticles();
	}
	
	@PreAuthorize("hasAuthority('EDIT_ARTICLE')")
	@PutMapping("/edit-article")
	public String editArticle(@RequestBody Article article) {
		return service.editArticle(article);
	}
	
	@PreAuthorize("hasAuthority('DELETE_ARTICLE')")
	@DeleteMapping("/delete-article")
	public String deleteArticle(@PathVariable String id) {
		return service.deleteArticle(id);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/rejectArticle/{id}")
	public String updateRejectStatus(@PathVariable String id, @RequestParam String reason) {
		return service.updateRejectStatus(id, reason);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/acceptArticle/{id}")
	public String updateAcceptStatus(@PathVariable String id) {
		return service.updateAcceptStatus(id);
	}
}
