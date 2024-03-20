package com.fullstack.newsplatform.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Data;

@Document(collection = "role")
@Data
public class Role {

	@Id
	private String id;
	
	@Field("roleName")
	private String roleName;
}
