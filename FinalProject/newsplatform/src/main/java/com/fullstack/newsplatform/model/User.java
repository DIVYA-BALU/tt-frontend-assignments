package com.fullstack.newsplatform.model;


import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Builder;
import lombok.Data;

@Document(collection = "user")
@Data
@Builder
public class User implements UserDetails{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	private String id;
	
	@Field("firstName")
	private String firstName;
	
	@Field("lastName")
	private String lastName;
	
	@Field("email")
	private String email;
	
	@Field("createdDate")
	private Date createdDate;
	
	@Field("phoneNo")
	private String phoneNo;
	
	@Field("occupation")
	private String occupation;
	
	@Field("location")
	private String location;
	
	@Field("suscribedEndDate")
	private Date suscribedEndDate;
	
	@JsonIgnore
	@Field("password")
	private String password;
	
	@DocumentReference
	@Field("role")
    private Role role;
	
	@DocumentReference
	@Field("permission")
    private List<RolePermission> rolePermission;

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		List<GrantedAuthority> authorities = new ArrayList<>();
		
		for(RolePermission rolePermission : rolePermission) {
			authorities.add(new SimpleGrantedAuthority(rolePermission.getPermission().getPermissionName()));
		}
		return authorities;
	}

	@Override
	public String getUsername() {
		return email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
