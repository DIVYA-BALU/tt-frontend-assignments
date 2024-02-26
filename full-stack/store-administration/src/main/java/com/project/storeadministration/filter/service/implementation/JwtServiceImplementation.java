package com.project.storeadministration.filter.service.implementation;

import java.security.Key;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.project.storeadministration.filter.service.JwtService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtServiceImplementation implements JwtService {
  private static final String SECRET_KEY = "ba61a5dcb888a96d48c67f4306b1f541b08dac1d6fa4e341a619787e7694db35";

  public String extractUserName(String jwt) {
    return extractClaim(jwt, Claims::getSubject);
  }

  public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
    final Claims claims = extractAllClaims(token);
    return claimsResolver.apply(claims);
  }

  public String generateToken(UserDetails userDetails) {
    Map<String, Object> claims = new HashMap<>();
    return generateToken(claims, userDetails);
  }

  public String generateToken(Map<String, Object> extraClaims, UserDetails userDetails) {
    return Jwts.builder().setClaims(extraClaims).setSubject(userDetails.getUsername())
        .signWith(getKey(), SignatureAlgorithm.HS256).compact();
  }

  private Claims extractAllClaims(String jwt) {
    return Jwts.parserBuilder()
        .setSigningKey(getKey())
        .build()
        .parseClaimsJws(jwt)
        .getBody();
  }

  public boolean isTokenValid(String jwt, UserDetails userDetails) {
    final String username = extractUserName(jwt);
    return (username.equals(userDetails.getUsername())) && !isTokenExpired(jwt);
  }

  private boolean isTokenExpired(String jwt) {
    return false;
  }

  private Key getKey() {
    byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
    return Keys.hmacShaKeyFor(keyBytes);
  }
}
