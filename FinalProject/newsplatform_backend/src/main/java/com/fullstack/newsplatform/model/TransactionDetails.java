package com.fullstack.newsplatform.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
@Document("transaction")
public class TransactionDetails {

	@Id
	private String id;
	
	@Field("paymentId")
	private String paymentId;
	
	@DocumentReference
	@Field("user")
	private User user;
	
	@Field("startDate")
	private Date startDate;
	
	@Field("endDate")
	private Date endDate;
}
