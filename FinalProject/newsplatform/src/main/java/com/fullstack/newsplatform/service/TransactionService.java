package com.fullstack.newsplatform.service;

import com.fullstack.newsplatform.model.TransactionDetails;

public interface TransactionService {
	
	TransactionDetails createTransaction(String token, String id);

	TransactionDetails getTransaction(String token);
}
