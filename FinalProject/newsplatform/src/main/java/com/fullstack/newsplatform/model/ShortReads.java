	package com.fullstack.newsplatform.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Builder;
import lombok.Data;

@Document(collection = "shortReads")
@Data
@Builder
public class ShortReads {

	@Id
	private String id;
	
	@Field("shortReadsUid")
	private String shortReadsUid;
	
	@Field("title")
	private String title;
	
	@Field("image")
	private String image;
	
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
