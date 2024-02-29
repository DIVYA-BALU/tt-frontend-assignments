package com.petAdoption.petPalFinder.services;

import java.security.Key;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;

import io.jsonwebtoken.Claims;

public interface JwtService{

    public String extractUserName(String token);
    public <T> T extractClaims(String token,Function<Claims,T> claimsResolver);
    public String generateToken(UserDetails userDetails,String id);
    public String createToken(Map<String,Object> extraClaims,UserDetails userDetails,String id, long expiration);
    public boolean isTokenvalid(String token , UserDetails userDetails);

    // private boolean isTokenExpired(String token);

    // private Date extractExpiration(String token) ;

    public Claims extractAllClaims(String token);
    public Key getSigningKey() ;

}
