package com.petAdoption.petPalFinder.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.petAdoption.petPalFinder.models.TransactionDetails;
import com.petAdoption.petPalFinder.services.implementation.TranctionDetailServiceImpl;

@Controller
@RequestMapping(path="transaction")
@CrossOrigin
public class TranctionController {
    
    @Autowired
    TranctionDetailServiceImpl tranctionDetailServiceImpl;

    @GetMapping("/createTransaction/{amount}")
    public ResponseEntity<TransactionDetails> createTransaction(@PathVariable double amount) {
        try {
            TransactionDetails response = tranctionDetailServiceImpl.createTransaction(amount);
            return new ResponseEntity<>(response,HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
