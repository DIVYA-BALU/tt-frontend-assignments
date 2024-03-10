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

import com.fullstack.newsplatform.dto.NewsDTO;
import com.fullstack.newsplatform.model.News;
import com.fullstack.newsplatform.service.NewsService;

@RestController
@RequestMapping("/news")
public class NewsController {

	@Autowired
	NewsService service;

//	@PreAuthorize("hasAuthority('WRITE_NEWS')")
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/add-news")
	public String addNews(@ModelAttribute NewsDTO News) throws IOException {
		return service.addNews(News);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/get-all-News")
	public List<News> getAllNews() {
		return service.getAllNews();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/get-pending-News")
	public Page<News> getPendingNews(@RequestParam int pageIndex, @RequestParam int pageSize) {
		Pageable pageable = PageRequest.of(pageIndex, pageSize);
		return service.getPendingNews(pageable);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/get-rejected-News")
	public Page<News> getRejectedNews(@RequestParam int pageIndex, @RequestParam int pageSize) {
		Pageable pageable = PageRequest.of(pageIndex, pageSize);
		return service.getRejectedNews(pageable);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/get-News/{id}")
	public News getNews(@PathVariable String id) {
		return service.getNews(id);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/get-today-news")
	public List<News> getTodayNews(){
		return service.getTodayNews();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/get-breaking-news")
	public List<News> getBreakingNews(){
		return service.getBreakingNews();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/get-sensational-news")
	public List<News> getSensationalNews(){
		return service.getSensationalNews();
	}
	
	@PreAuthorize("hasAuthority('EDIT_NEWS')")
	@PutMapping("/edit-News")
	public String editNews(@RequestBody News News) {
		return service.editNews(News);
	}
	
	@PreAuthorize("hasAuthority('DELETE_NEWS')")
	@DeleteMapping("/delete-News")
	public String deleteNews(@PathVariable String id) {
		return service.deleteNews(id);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/rejectNews/{id}")
	public String updateRejectStatus(@PathVariable String id, @RequestParam String reason) {
		return service.updateRejectStatus(id, reason);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/acceptNews/{id}")
	public String updateAcceptStatus(@PathVariable String id) {
		System.out.println("came");
		return service.updateAcceptStatus(id);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/increaseViews/{id}")
	public void increaseViews(@PathVariable String id) {
		System.out.println("vies");
		service.increaseViews(id);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/getPopularNews")
	public List<News> getPopularNews() {
		System.out.println("popular");
		return service.getPopularNews();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("search-news/{search}")
	public List<News> searchNews(@PathVariable String search) {
		return service.searchNews(search);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/category-news/{value}")
	public List<News> getCategory(@PathVariable String value) {
		return service.getCategory(value);
	}
}
