package com.fullstack.newsplatform.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.newsplatform.model.NewsSaveForLater;
import com.fullstack.newsplatform.service.NewsSaveForLaterService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/newsSave")
public class NewsSaveForLaterController {

	@Autowired
	NewsSaveForLaterService service;
	
	@GetMapping("/getAllSavedNews")
	public List<NewsSaveForLater> getAllSavedNews(HttpServletRequest request){
		String token = request.getHeader("Authorization").substring(7);
		return service.getAllSavedNews(token);
	}
	
	@PostMapping("/saveNews")
	public String saveNews(HttpServletRequest request, @PathVariable String id) {
		String token = request.getHeader("Authorization").substring(7);
		return service.saveNews(token, id);
	}
	
	@DeleteMapping("/unsaveNews")
	public String unsaveNews(@PathVariable String id) {
		return service.unsaveNews(id);
	}
}
