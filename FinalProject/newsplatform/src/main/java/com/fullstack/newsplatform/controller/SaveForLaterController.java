package com.fullstack.newsplatform.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.newsplatform.model.SaveForLater;
import com.fullstack.newsplatform.service.SaveForLaterService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/saveforlater")
@CrossOrigin(origins = "http://localhost:4200")
public class SaveForLaterController {

	@Autowired
	SaveForLaterService service;
	
	@GetMapping("/getAllSaved")
	public List<SaveForLater> getAllSaved(HttpServletRequest request){
		String token = request.getHeader("Authorization").substring(7);
		return service.getAllSaved(token);
	}
	
	@PostMapping("/saveArticle/{id}")
	public String saveArticle(HttpServletRequest request, @PathVariable String id) {
		String token = request.getHeader("Authorization").substring(7);
		return service.saveArticle(token, id);
	}
	
	@DeleteMapping("/unsaveArticle/{id}")
	public String unsaveArticle(@PathVariable String id) {
		return service.unsaveArticle(id);
	}
}
