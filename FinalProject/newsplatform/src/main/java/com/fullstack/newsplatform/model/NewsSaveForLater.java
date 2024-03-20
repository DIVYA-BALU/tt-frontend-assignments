package com.fullstack.newsplatform.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Builder;
import lombok.Data;

@Document(collection = "newsSaveForLater")
@Data
@Builder
public class NewsSaveForLater {

		@Id
		private String id;
		
		@DocumentReference
		@Field("user")
		private User user;
		
		@DocumentReference
		@Field("news")
		private News news;
	}
