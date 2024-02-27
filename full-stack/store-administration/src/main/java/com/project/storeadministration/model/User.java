package com.project.storeadministration.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document("users")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User implements UserDetails {
  @Id
  private String _id;
  private String emailId;
  private String name;
  private String password;
  private Long mobileNumber;
  private List<String> branchesId;
  private String sectionId;
  @DocumentReference(collection = "roles")
  private Role role;
  @DocumentReference(collection = "permissions")
  private List<Permission> permissions;
  private LocalDate joiningDate;
  private List<EmploymentDetail> employmentHistory;

  @Data
  public static class EmploymentDetail {
    private LocalDate joiningDate;
    private LocalDate relievingDate;
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
    authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getName()));
    for (Permission permission : role.getPermissions()) {
      authorities.add(new SimpleGrantedAuthority(permission.getName()));
    }
    for (Permission permission : permissions) {
      authorities.add(new SimpleGrantedAuthority(permission.getName()));
    }
    return authorities;
  }

  public String getId() {
    return this._id;
  }

  @Override
  public String getUsername() {
    return getEmailId();
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