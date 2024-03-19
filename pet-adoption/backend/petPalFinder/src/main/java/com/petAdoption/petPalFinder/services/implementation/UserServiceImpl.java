package com.petAdoption.petPalFinder.services.implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.petAdoption.petPalFinder.dao.UserDao;
import com.petAdoption.petPalFinder.dto.StatusUpdateDto;
import com.petAdoption.petPalFinder.dto.UserListDto;
import com.petAdoption.petPalFinder.models.User;
import com.petAdoption.petPalFinder.repositorys.RolesRepository;
import com.petAdoption.petPalFinder.repositorys.UserRepository;
import com.petAdoption.petPalFinder.services.UserService;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserDao userDao;

    @Autowired
    RolesRepository rolesRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public void saveUser(String email, String password, String role, String profileId) {

        User user = new User();
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));
        user.setProfileId(profileId);
        user.setRole(rolesRepository.findByRole(role).get());
        userRepository.save(user);
    }

    @Override
    public UserListDto getAllUser(String email,String role, Integer page,Integer size) {
        return userDao.getUsers(email, role, page,size);
    }
    
}
