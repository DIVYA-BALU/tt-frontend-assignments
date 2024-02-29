package com.petAdoption.petPalFinder.services.implementation;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.petAdoption.petPalFinder.services.JwtService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtServiceImpl implements JwtService{
        private static final String SECURITY_KEY = "C2380E01ED58E828F5DFB2EFDB45ECE23262E6217CE55500584DCE78862F97F3";

    public String extractUserName(String token) {
        return extractAllClaims(token).getSubject();
    }

    public <T> T extractClaims(String token,Function<Claims,T> claimsResolver)
    {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public String generateToken(UserDetails userDetails,String id){
        return createToken(new HashMap<>(), userDetails,id,1000*60*60*24);
    }

    public String createToken(Map<String,Object> extraClaims,UserDetails userDetails,String id, long expiration){
        extraClaims.put("role", userDetails.getAuthorities());
        extraClaims.put("id", id);
        return Jwts.builder()
                   .setClaims(extraClaims)
                   .setSubject(userDetails.getUsername())
                   .setIssuedAt(new Date(System.currentTimeMillis()))
                //    .setExpiration(new Date(System.currentTimeMillis()+1000*60*60*24))
                   .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                   .compact();
    }

    public boolean isTokenvalid(String token , UserDetails userDetails)
    {
        final String username = extractUserName(token);
        return (username.equals(userDetails.getUsername())) ;
        // && !isTokenExpired(token);
    }

    // private boolean isTokenExpired(String token) {
    //     return extractExpiration(token).before(new Date());
    // }

    // private Date extractExpiration(String token) {
    //     return extractClaims(token, Claims::getExpiration);
    // }

    public Claims extractAllClaims(String token){
        final Claims claims = Jwts.parserBuilder()
            .setSigningKey(getSigningKey())
            .build()
            .parseClaimsJws(token)
            .getBody();
            return claims;
    }

    public Key getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECURITY_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }

}
