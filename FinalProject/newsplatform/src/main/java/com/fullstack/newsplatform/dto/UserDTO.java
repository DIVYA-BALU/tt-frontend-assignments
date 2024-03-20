package com.fullstack.newsplatform.dto;

import lombok.Data;

@Data
public class UserDTO {
	
	private String firstName;

	private String email;
	
	private String phoneNo;
	
	private String password;
	
	private String role;
}
