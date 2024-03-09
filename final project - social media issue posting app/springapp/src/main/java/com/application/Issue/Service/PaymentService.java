package com.application.Issue.Service;

import com.application.Issue.Model.TransactionDetails;
import com.razorpay.Order;

public interface PaymentService {
    
    public TransactionDetails createTransaction(Double amount);
    public TransactionDetails prepareTransactionDetails(Order order);
    
}
