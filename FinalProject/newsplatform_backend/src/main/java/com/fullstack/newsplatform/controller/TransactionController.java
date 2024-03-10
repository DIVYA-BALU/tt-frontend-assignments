package com.fullstack.newsplatform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.newsplatform.model.TransactionDetails;
import com.fullstack.newsplatform.service.TransactionService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/transaction")
@CrossOrigin(origins = "http://localhost:4200")
public class TransactionController {
	
	@Autowired
	TransactionService service;
	
	@PostMapping("/createTransaction/{id}")
	public TransactionDetails createTransaction(HttpServletRequest request, @PathVariable String id) {
		String token = request.getHeader("Authorization").substring(7);
		return service.createTransaction(token, id);
	}

	@GetMapping("/GetTransaction")
	public TransactionDetails getTransaction(HttpServletRequest request) {
		String token = request.getHeader("Authorization").substring(7);
		return service.getTransaction(token);
	}
}
