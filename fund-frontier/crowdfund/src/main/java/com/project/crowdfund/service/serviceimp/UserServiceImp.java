package com.project.crowdfund.service.serviceimp;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.crowdfund.Exception.EmailAlreadyExistsException;
import com.project.crowdfund.Repository.RoleRepository;
import com.project.crowdfund.Repository.UserRepository;
import com.project.crowdfund.dto.RequestDto;
import com.project.crowdfund.dto.LoginRequest;
import com.project.crowdfund.dto.LoginResponse;
import com.project.crowdfund.model.Role;
import com.project.crowdfund.model.Users;
import com.project.crowdfund.service.FunderService;
import com.project.crowdfund.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImp implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final RoleRepository roleRepository;
    private final FunderService funderService;

    @Override
    public Users save(RequestDto request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new EmailAlreadyExistsException("Email already exists");
        }

        Users user = Users.builder()
                .email(request.getEmail())
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(roleRepository.findByRole(request.getRole().toUpperCase()))
                .build();

        userRepository.save(user);
        System.out.println(request.getRole());

        if (request.getRole().equals("funder")) {
            System.out.println(request.getRole());
            funderService.save(request);
        }

        return user;
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        String token = jwtService.generateToken(user);

        return LoginResponse.builder()
                .token(token)
                .build();
    }

    @Override
    public Page<Users> getAllUsers(Integer pageNo, Integer pageSize) {
        PageRequest pageRequest = PageRequest.of(pageNo, pageSize);
        Page<Users> pagingUsers = userRepository.findAll(pageRequest);
        return pagingUsers;
    }

    @Override
    public Users getUser(String id) {
        return userRepository.findBy_id(id);
    }

    @Override
    public Users getUserByEmail(String userEmail) {
        return userRepository.findByEmail(userEmail).get();
    }

    public Role getUserRole(String email) {
        Users user = getUserByEmail(email);
        return user.getRole();
    }

    @Override
    public Users updateUser(Users request) {
        Users user = userRepository.findBy_id(request.get_id());
        request.setPassword(user.getPassword());
        return userRepository.save(request);
    }

}
