package com.project.storeadministration.service.implementations;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.storeadministration.dto.EnrollUserRequest;
import com.project.storeadministration.dto.LoginRequest;
import com.project.storeadministration.dto.LoginResponse;
import com.project.storeadministration.exception.CustomException;
import com.project.storeadministration.filter.service.JwtService;
import com.project.storeadministration.model.Permission;
import com.project.storeadministration.model.Role;
import com.project.storeadministration.model.User;
import com.project.storeadministration.repository.RoleRepository;
import com.project.storeadministration.repository.UserRepository;
import com.project.storeadministration.service.UserService;

@Service
public class UserServiceImplemetation implements UserService {
  @Autowired
  private UserRepository userRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Autowired
  private JwtService jwtService;

  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private RoleRepository roleRepository;

  public ResponseEntity<?> enrollUser(EnrollUserRequest request, boolean signUp) throws CustomException {

    if (request.getEmailId() == null || request.getEmailId() == "")
      throw new CustomException("Email Id must not be empty");

    if (request.getEmailId() != null && userRepository.existsByEmailId(request.getEmailId()))
      throw new CustomException("Email Id already registered");

    Optional<Role> optionalUserRole = roleRepository.findByName(request.getRole());

    Role userRole = new Role();
    if (optionalUserRole.isPresent()) {
      userRole = optionalUserRole.get();
    } else {
      throw new CustomException("Invalid Role");
    }

    User user = User.builder()
        .emailId(request.getEmailId())
        .name(request.getName())
        .password(passwordEncoder.encode(request.getPassword()))
        .role(userRole)
        .mobileNumber(request.getMobileNumber())
        .branchesId(new ArrayList<>(Arrays.asList(request.getBranchId())))
        .sectionId(request.getSectionId())
        .joiningDate(request.getJoiningDate())
        .build();
    user = userRepository.save(user);

    if (signUp) {
      List<String> permissions = new ArrayList<String>();

      for (Permission permission : userRole.getPermissions()) {
        permissions.add(permission.getName());
      }

      LoginResponse response = LoginResponse.builder()
          .jwt(jwtService.generateToken(user))
          .userEmail(user.getEmailId())
          .branchesId(user.getBranchesId())
          .sectionId(user.getSectionId())
          .role(userRole.getName())
          .permissions(permissions)
          .build();

      return new ResponseEntity<LoginResponse>(response, HttpStatus.OK);
    }

    else
      return new ResponseEntity<User>(user,HttpStatus.OK);
  }

  public LoginResponse validateUser(LoginRequest loginRequest){
    authenticationManager
        .authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmailId(), loginRequest.getPassword()));
    User user = userRepository.findByEmailId(loginRequest.getEmailId()).orElseThrow();

    List<String> permissions = new ArrayList<String>();

    for(Permission permission : user.getRole().getPermissions()) {
      permissions.add(permission.getName());
    }

    for(Permission permission : user.getPermissions()){
      permissions.add(permission.getName());
    }

    LoginResponse response = LoginResponse.builder()
          .jwt(jwtService.generateToken(user))
          .userEmail(user.getEmailId())
          .branchesId(user.getBranchesId())
          .sectionId(user.getSectionId())
          .role(user.getRole().getName())
          .permissions(permissions)
          .build();

    return response;
  }

}
