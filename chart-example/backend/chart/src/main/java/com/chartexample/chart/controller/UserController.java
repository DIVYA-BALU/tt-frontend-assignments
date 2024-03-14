package com.chartexample.chart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.chartexample.chart.model.CityCount;
import com.chartexample.chart.model.DensityByCordinates;
import com.chartexample.chart.model.RegistrationCount;
import com.chartexample.chart.model.User;
import com.chartexample.chart.service.UserService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.ResponseEntity;

@Controller
@CrossOrigin("*")
@RequestMapping(path = "user")
public class UserController {
    
    @Autowired
    UserService userService;

    @PostMapping
    public ResponseEntity<Boolean> post(@RequestBody List<User> user) {
        return ResponseEntity.ok(userService.saveUser(user));
    }
    
    @PostMapping("single")
    public ResponseEntity<Boolean> save(@RequestBody User user) {
        return ResponseEntity.ok(userService.save(user));
    }

    @GetMapping("/density")
    public ResponseEntity<List<DensityByCordinates>> getUserDensity() {
        return ResponseEntity.ok(userService.getDenityByCordinates());
    }

    @GetMapping("/city")
    public ResponseEntity<List<CityCount>> getCityCount() {
        return ResponseEntity.ok(userService.getCityCountOfUsers());
    }

    @GetMapping("/registration-count")
    public ResponseEntity<List<RegistrationCount>> getRegistrationCount() {
        return ResponseEntity.ok(userService.getRegistrationCountByMonth());
    }
    
}
