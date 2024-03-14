package com.chartexample.chart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.chartexample.chart.model.HourlyLoginActivity;
import com.chartexample.chart.model.LoginDetail;
import com.chartexample.chart.model.User;
import com.chartexample.chart.service.LoginDetailService;

@Controller
@CrossOrigin("*")
@RequestMapping(path = "login")
public class LoginDetailController {
    
    @Autowired
    LoginDetailService loginDetailService;

    @PostMapping
    public ResponseEntity<Boolean> post(@RequestBody List<LoginDetail> loginDetails) {
        return ResponseEntity.ok(loginDetailService.saveAll(loginDetails));
    }

    @GetMapping
    public ResponseEntity<List<HourlyLoginActivity>> getHourlyActivity() {
        return ResponseEntity.ok(loginDetailService.getHourlyLoginActivities());
    }
}
