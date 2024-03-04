package com.petAdoption.petPalFinder.services;

import com.petAdoption.petPalFinder.dto.StatusUpdateDto;

/**
 * UserService
 */
public interface UserService {
    public void saveUser(String email,String password,String role,String profileId);
}