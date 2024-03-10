package com.fullstack.newsplatform.model;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Builder;
import lombok.Data;

@Document(collection = "userNews")
@Data
@Builder
public class UserNews {

	@Id
	private String id;
	
	@Field("name")
	private String name;
	
	@Field("email")
	private String email;
	
	@Field("phoneno")
	private String phoneNo;
	
	@Field("images")
	private List<String> images;
	
	@Field("date")
	private LocalDate date;
	
	@Field("content")
	private String content;
	
	@Field("status")
	private String status;
	
	@Field("reason")
	private String reason;
}
