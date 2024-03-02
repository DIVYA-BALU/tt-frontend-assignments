package com.project.storeadministration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.storeadministration.model.Bill;
import com.project.storeadministration.service.BillService;

@RestController
@RequestMapping("bills")
@CrossOrigin("*")
public class BillController {
  
  @Autowired
  private BillService billService;
  
  @PostMapping
  public ResponseEntity<Bill> saveBranch(@RequestBody Bill bill) {
    return new ResponseEntity<Bill>(billService.saveBill(bill), HttpStatus.OK);
  }
}
