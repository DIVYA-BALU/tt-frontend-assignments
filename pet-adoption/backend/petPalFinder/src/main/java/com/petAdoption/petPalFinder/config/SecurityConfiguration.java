package com.petAdoption.petPalFinder.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.petAdoption.petPalFinder.filters.JwtAuthenticationFilter;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfiguration {
    
    private final JwtAuthenticationFilter jwtAuthfilter;

    private final AuthenticationProvider authenticationProvider;

    private String[] permitAllEndpointList = {"/auth/**","/static/**","/email-verification/**","/pet-post/near-by-post","/pet-post/latest","/transaction/**","veterinary-doctor/all","/pet-post/search-input/**","organization/search-city"};
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception
    {
        http .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(requests -> requests
                        .requestMatchers(permitAllEndpointList)
                        .permitAll()
                        .requestMatchers(HttpMethod.POST,"/organization","/veterinary-doctor")
                        .permitAll()
                        .requestMatchers(HttpMethod.GET,"/pet-post","/veterinary-doctor")
                        .permitAll()
                        .anyRequest()
                        .authenticated())
                .sessionManagement(management -> management
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthfilter, UsernamePasswordAuthenticationFilter.class)
                .logout(logout -> logout
                    .logoutUrl("/api/auth/logout")
                    .logoutSuccessHandler((request,response,authentication)-> SecurityContextHolder.clearContext())     
                )
            ;
      return http.build();
    }
}
