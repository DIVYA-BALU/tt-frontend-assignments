package com.project.storeadministration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.storeadministration.model.Investment;
import com.project.storeadministration.service.InvestmentService;

@CrossOrigin
@RequestMapping("/investments")
@RestController
public class InvestmentController {
  
  @Autowired
  private InvestmentService investmentService;

  @GetMapping("/total")
  public ResponseEntity<Investment> getTotalInvestment(){
    return new ResponseEntity<Investment>(investmentService.getTotalInvestment(),HttpStatus.OK);
  }

  @PostMapping
  public ResponseEntity<Investment> saveInvestment(@RequestBody Investment investment){
    return new ResponseEntity<Investment>(investmentService.saveInvestment(investment),HttpStatus.OK);
  }
}
