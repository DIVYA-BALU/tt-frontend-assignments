package com.fullstack.newsplatform.model;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Builder;
import lombok.Data;

@Document(collection = "article")
@Data
@Builder
public class Article {

	@Id
	private String id;
	
	@Field("articleUid")
	private String articleUid;
	
	@Field("title")
	private String title;
	
	@Field("images")
	private List<String> images;
	
	@Field("content")
	private String content;
	
	@Field("category")
	private String category;
	
	@Field("date")
	private Date date;
	
	@Field("views")
	private int views;
	
	@Field("reason")
	private String reason;
	
	@Field("status")
	private String status;
	
	@Field("isSaved")
	private boolean isSaved;
	
}
