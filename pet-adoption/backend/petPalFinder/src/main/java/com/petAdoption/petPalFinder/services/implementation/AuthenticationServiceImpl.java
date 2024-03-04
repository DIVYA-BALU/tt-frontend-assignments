package com.petAdoption.petPalFinder.services.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.petAdoption.petPalFinder.dto.LoginRequest;
import com.petAdoption.petPalFinder.dto.Registration;
import com.petAdoption.petPalFinder.dto.Token;
import com.petAdoption.petPalFinder.exception.EmailAlreadyExist;
import com.petAdoption.petPalFinder.models.Adopter;
import com.petAdoption.petPalFinder.models.Roles;
import com.petAdoption.petPalFinder.models.User;
import com.petAdoption.petPalFinder.models.VeterinaryDoctor;
import com.petAdoption.petPalFinder.repositorys.AdopterRepository;
import com.petAdoption.petPalFinder.repositorys.RolesRepository;
import com.petAdoption.petPalFinder.repositorys.UserRepository;
import com.petAdoption.petPalFinder.repositorys.VeterinaryDoctorRepository;
import com.petAdoption.petPalFinder.services.AuthenticationService;
import com.petAdoption.petPalFinder.services.JwtService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService{
    @Autowired
    UserRepository userRepo;

    private final PasswordEncoder passwordEncoder;

    @Autowired
    JwtService jwtService;

    @Autowired
    RolesRepository roleRepo;

    @Autowired
    AdopterRepository adopterRepository;

    @Autowired 
    VeterinaryDoctorRepository veterinaryDoctorRepository;

    // @Autowired
    // UserPermisionRepository permisionRepo;
    
    private final AuthenticationManager authenticationManager;

    public Token register(Registration requestBody) {
        String id="";
        User user = new User(); 
        user.setPassword(passwordEncoder.encode(requestBody.getPassword()));
        user.setEmail(requestBody.getEmail());
        Roles role = new Roles();
        role.setRole(requestBody.getRole());
        user.setRole(roleRepo.findByRole(requestBody.getRole()).get());
        if (userRepo.existsByEmail(user.getEmail())) {
            throw new EmailAlreadyExist("Email already exists");
        }
        if(requestBody.getRole().equals("ADOPTER")){
            user.setProfileId(adopterRepository.save(new Adopter()).get_id());
        }else if(requestBody.getRole().equals("VETERINARY_DOCTOR")){
            user.setProfileId(veterinaryDoctorRepository.save(new VeterinaryDoctor()).get_id());
        }
        user = userRepo.save(user);
        if(id.equals("")){
            id=user.getId();
        }
        Token jwtToken = new Token();
        jwtToken.setToken(jwtService.generateToken(user,user.getProfileId()));
        jwtToken.setRefreshToken(jwtService.generateToken(user,user.getId()));
        return jwtToken;
    }


    public Token authenticate(LoginRequest request) {
        String id;
        User user = userRepo.findByEmail(request.getEmail()).orElseThrow(()-> new UsernameNotFoundException("User not Found"));
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        // tr.setPerm(permisionRepo.findByUser(new ObjectId(id)).get(0));
        // if(user.getRole().getRole().equals("USER")){
        //    id = pageRepo.findByName(user.getName()).get().get_id();
        // }
        if(user.getRole().getRole().equals("ADMIN")){
            id = user.getId();
        }else{
            id = user.getProfileId();
        }
        Token jwtToken = new Token();
        jwtToken.setToken(jwtService.generateToken(user,id));
        jwtToken.setRefreshToken(jwtService.generateToken(user,id));
        return jwtToken;

    }


    public List<User> getUser() {
        return userRepo.findAll();
    }


    // @Override
    // public Token admin(Registration request) {
    //     User user = new User();
    //     user.setPassword(passwordEncoder.encode(request.getPassword()));
    //     user.setEmail(request.getEmail());
    //     Roles role = new Roles();
    //     role.setRole(request.getRole());
    //     user.setRole(roleRepo.findByRole(request.getRole()).get());
    //     user = userRepo.save(user);
    //     Token jwtToken = new Token();
    //     jwtToken.setToken(jwtService.generateToken(user,user.getId()));
    //     jwtToken.setRefreshToken(jwtService.generateToken(user,user.getId()));
    //     return jwtToken;
    // }


    // public Roles saveRole(Roles request) {
    //     return roleRepo.save(request);
    // }

    // public List<UserPermmision> getPermision(String id){
    //     return permisionRepo.findByUser(new ObjectId(id));
    // }
}
