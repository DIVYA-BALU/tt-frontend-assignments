package com.fullstack.newsplatform.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Data;

@Document(collection = "rolePermission")
@Data
public class RolePermission {

	@Id
	private String id;
	
	@DocumentReference
	@Field("role")
	private Role role;
	
	@DocumentReference
	@Field("permission")
	private Permission permission;
}
