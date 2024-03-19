package com.petAdoption.petPalFinder.services;

import com.petAdoption.petPalFinder.dto.UserListDto;
import java.util.List;

/**
 * UserService
 */
public interface UserService {
    public void saveUser(String email,String password,String role,String profileId);
    public UserListDto getAllUser(String email,String role, Integer page,Integer size);
}