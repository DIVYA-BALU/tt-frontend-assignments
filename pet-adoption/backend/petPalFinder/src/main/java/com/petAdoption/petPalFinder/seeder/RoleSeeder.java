package com.petAdoption.petPalFinder.seeder;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.petAdoption.petPalFinder.models.Roles;
import com.petAdoption.petPalFinder.models.User;
import com.petAdoption.petPalFinder.repositorys.RolesRepository;
import com.petAdoption.petPalFinder.repositorys.UserRepository;

@Component
public class RoleSeeder implements CommandLineRunner{

    @Autowired
    RolesRepository rolesRepository;

    @Autowired
    UserRepository userRepository;
    
    @Override
    public void run(String... args) throws Exception {
        ArrayList<String> roles =new ArrayList<>();
        roles.add("ADOPTER");
        roles.add("VETERINARY_DOCTOR");
        roles.add("ORGANIZATION");
        roles.add("ADMIN");
        if(rolesRepository.count() == 0){
        for(String role:roles){
            Roles newRole = new Roles();
            newRole.setRole(role);
            rolesRepository.save(newRole);
        }
        if(userRepository.count() == 0){
            User user = new User();
            user.setEmail("admin@gmail.com");
            user.setPassword("admin");
            user.setRole(rolesRepository.findByRole("ADMIN").get());
            userRepository.save(user);
    }
    }
    }
    
}
