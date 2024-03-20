package com.example.charts.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.charts.dto.RegistrationMonthCount;
import com.example.charts.model.UserDetails;
import com.example.charts.repository.CustomUserDetailsRepository;
import com.example.charts.repository.UserDetailsRepository;
import com.example.charts.dto.CityCount;
import com.example.charts.dto.UserDensity;

@Service
public class UserDetailsService {

  @Autowired
  private CustomUserDetailsRepository customUserDetailsRepository;
  
  @Autowired
  private UserDetailsRepository userDetailsRepository;
  
  public List<RegistrationMonthCount> getRegistrationMonthCount() {
    return customUserDetailsRepository.getMonthWiseRegistrationCount();
  }

  public List<UserDetails> saveUserDetails(List<UserDetails> userDetails) {
    return userDetailsRepository.saveAll(userDetails);
  }
  
  public List<CityCount> getCountOfCities(){
    return customUserDetailsRepository.getCountOfCities();
  }

  public List<UserDensity> getUserDensity(){
    return customUserDetailsRepository.getUserDensity();
  }
}
