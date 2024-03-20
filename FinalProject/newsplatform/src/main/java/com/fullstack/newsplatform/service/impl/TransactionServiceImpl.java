package com.fullstack.newsplatform.service.impl;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fullstack.newsplatform.jwtService.JwtService;
import com.fullstack.newsplatform.model.TransactionDetails;
import com.fullstack.newsplatform.model.User;
import com.fullstack.newsplatform.repository.TransactionRepository;
import com.fullstack.newsplatform.repository.UserRepository;
import com.fullstack.newsplatform.service.TransactionService;

@Service
public class TransactionServiceImpl implements TransactionService {

	@Autowired
	TransactionRepository repository;

	@Autowired
	JwtService jwtService;

	@Autowired
	UserRepository repository2;

	@Override
	public TransactionDetails getTransaction(String token) {
		String email = jwtService.extractUsername(token);
		User user = repository2.findByemail(email);

		return repository.findByUser(user);
	}

	@Override
	public TransactionDetails createTransaction(String token, String id) {

		String email = jwtService.extractUsername(token);
		User user = repository2.findByemail(email);

		LocalDateTime today = LocalDateTime.now();
		Date utcDate = Date.from(today.atZone(ZoneId.of("UTC")).toInstant());
		
		LocalDateTime end = LocalDateTime.now().plusDays(30);
		Date utcDate2 = Date.from(end.atZone(ZoneId.of("UTC")).toInstant());

		TransactionDetails transactionDetails = TransactionDetails.builder().paymentId(id).user(user).startDate(utcDate)
				.endDate(utcDate2).build();
		
		user.setSuscribedEndDate(utcDate2);
		repository2.save(user);

		return repository.save(transactionDetails);
	}

}
