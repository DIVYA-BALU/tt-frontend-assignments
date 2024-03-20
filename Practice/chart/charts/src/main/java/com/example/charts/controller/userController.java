package com.example.charts.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.charts.dto.RegistrationMonthCount;
import com.example.charts.dto.CityCount;
import com.example.charts.model.UserDetails;
import com.example.charts.service.UserDetailsService;
import com.example.charts.dto.UserDensity;

@RequestMapping("/userDetails")
@RestController
@CrossOrigin
public class userController {

  @Autowired
  private UserDetailsService userDetailsService;

  @GetMapping("registrationMonthCount")
  public ResponseEntity<List<RegistrationMonthCount>> getRegisrationMonthCount() {
    return new ResponseEntity<List<RegistrationMonthCount>>(userDetailsService.getRegistrationMonthCount(),
        HttpStatus.OK);
  }

  @GetMapping("userDensity")
  public ResponseEntity<List<UserDensity>> getUserDensity() {
    return new ResponseEntity<List<UserDensity>>(userDetailsService.getUserDensity(), HttpStatus.OK);
  }

  @GetMapping("registrationCountOfCities")
  public ResponseEntity<List<CityCount>> getCountOfCities() {
    return new ResponseEntity<List<CityCount>>(userDetailsService.getCountOfCities(), HttpStatus.OK);
  }

  @PostMapping
  public ResponseEntity<List<UserDetails>> saveUserDetails(@RequestBody List<UserDetails> userDetails) {
    return new ResponseEntity<List<UserDetails>>(userDetailsService.saveUserDetails(userDetails), HttpStatus.OK);
  }
}
