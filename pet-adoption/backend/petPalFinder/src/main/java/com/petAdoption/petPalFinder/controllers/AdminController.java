package com.petAdoption.petPalFinder.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;

import com.petAdoption.petPalFinder.dto.MonthWiseRevanue;
import com.petAdoption.petPalFinder.dto.UserListDto;
import com.petAdoption.petPalFinder.dto.WebsiteRevenueDto;
import com.petAdoption.petPalFinder.dto.YearWiseRevenue;
import com.petAdoption.petPalFinder.models.WebsiteRevenue;
import com.petAdoption.petPalFinder.services.UserService;
import com.petAdoption.petPalFinder.services.WebsiteRevenueService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@Controller
@CrossOrigin
@RequestMapping(path = "admin")
public class AdminController {

    @Autowired
    UserService userService;

    @Autowired
    WebsiteRevenueService websiteRevenueService;
    
    @GetMapping("users")
    public ResponseEntity<UserListDto> userLists(@RequestParam String email, @RequestParam String role,@RequestParam Integer page,@RequestParam Integer size) {
        return ResponseEntity.ok(userService.getAllUser(email, role, page,size));
    }
    
    @GetMapping("year")
    public ResponseEntity<List<MonthWiseRevanue>> monthRevenue(@RequestParam Integer year) {
        
        return ResponseEntity.ok(websiteRevenueService.monthRevenues(year));
    }

    @GetMapping("revenue")
    public ResponseEntity<List<YearWiseRevenue>> yearRevenue() {
        
        return ResponseEntity.ok(websiteRevenueService.yearRevenues());
    }
    
}
