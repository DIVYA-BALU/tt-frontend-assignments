package com.application.Issue.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.Issue.Model.TransactionDetails;
import com.application.Issue.Service.PaymentService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/pay")
public class PaymentController {
    
    @Autowired
    private PaymentService paymentService;

    @GetMapping("/createTransaction/{amount}")
    public TransactionDetails createTransaction(@PathVariable(name = "amount") Double amount) {
        return paymentService.createTransaction(amount);
    }

}
