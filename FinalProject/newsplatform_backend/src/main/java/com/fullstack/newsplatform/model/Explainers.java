package com.fullstack.newsplatform.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Builder;
import lombok.Data;

@Document(collection = "explainers")
@Data
@Builder
public class Explainers {

	@Id
	private String id;
	
	@Field("ExplainersUid")
	private String explainersUid;
	
	@Field("title")
	private String title;
	
	@Field("image")
	private String image;
	
	@Field("content")
	private String content;
	
	@Field("date")
	private Date date;
	
	@Field("views")
	private int views;
	
	@Field("reason")
	private String reason;
	
	@Field("status")
	private String status;
}
