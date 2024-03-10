package com.fullstack.newsplatform.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Data;

@Document(collection = "permission")
@Data
public class Permission {

	@Id
	private String id;
	
	@Field("permissionName")
	private String permissionName;
}
