package com.fullstack.newsplatform.model;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Builder;
import lombok.Data;

@Document(collection = "news")
@Data
@Builder
public class News {

	@Id
	private String id;
	
	@Field("newsUid")
	private String newsUid;
	
	@Field("title")
	private String title;
	
	@Field("synopsis")
	private String synopsis;
	
	@Field("images")
	private List<String> images;
	
	@Field("content")
	private String content;
	
	@DocumentReference
	@Field("category")
	private Category category;
	
	@Field("date")
	private Date date;
	
	@Field("views")
	private int views;
	
	@Field("reason")
	private String reason;
	
	@Field("status")
	private Status status;
}
