package com.fullstack.newsplatform.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Builder;
import lombok.Data;

@Document("category")
@Data
@Builder
public class Category {

	@Id
	private String id;
	
	@Field("categoryName")
	private String categoryName;
}
