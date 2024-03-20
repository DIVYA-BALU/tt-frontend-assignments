package com.fullstack.newsplatform.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Builder;
import lombok.Data;

@Document(collection = "saveForLater")
@Data
@Builder
public class SaveForLater {

	@Id
	private String id;
	
	@DocumentReference
	@Field("user")
	private User user;
	
	@DocumentReference
	@Field("article")
	private Article article;
}
