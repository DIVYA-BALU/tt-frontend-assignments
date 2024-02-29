package com.petAdoption.petPalFinder.services;

import com.petAdoption.petPalFinder.dto.LoginRequest;
import com.petAdoption.petPalFinder.dto.Registration;
import com.petAdoption.petPalFinder.dto.Token;

public interface AuthenticationService {
    public Token register(Registration requestBody);
    public Token authenticate(LoginRequest request) ;
    // public Token admin(Registration request);
    
}
