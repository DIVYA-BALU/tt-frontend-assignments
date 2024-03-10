package com.fullstack.newsplatform.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.fullstack.newsplatform.dto.UserNewsDTO;
import com.fullstack.newsplatform.model.UserNews;
import com.fullstack.newsplatform.service.UserNewsService;

@RestController
@RequestMapping("/usernews")
public class UserNewsController {

	@Autowired
	UserNewsService service;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/addMyNews")
	public String addMyNews(@ModelAttribute UserNewsDTO userNews) throws IOException {
		return service.addMyNews(userNews);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/getUserNews")
	public Page<UserNews> getUserNews(@RequestParam int pageIndex, @RequestParam int pageSize) {
		System.out.println("came");
		Pageable pageable = PageRequest.of(pageIndex, pageSize);
		return service.getUserNews(pageable);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/getUserNewsPending")
	public Page<UserNews> getUserNewsPending(@RequestParam int pageIndex, @RequestParam int pageSize) {
		Pageable pageable = PageRequest.of(pageIndex, pageSize);
		Page<UserNews> users = service.getUserNewsPendings(pageable);
		return users;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/rejectUserNews/{id}")
	public String updateRejectStatus(@PathVariable String id, @RequestParam String reason) {
		System.out.println(reason);
		 return service.updateRejectStatus(id, reason);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/acceptUserNews/{id}")
	public String updateAcceptStatus(@PathVariable String id) {
		return service.updateAcceptStatus(id);
	}
}
