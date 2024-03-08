package com.application.Issue.Service.impl;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.Issue.Model.TransactionDetails;
import com.application.Issue.Repository.PaymentRepository;
import com.application.Issue.Service.PaymentService;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;

@Service
public class PaymentServiceImpl implements PaymentService {
    
    @Autowired
    private PaymentRepository paymentRepo;

    private static final String KEY = "rzp_test_6p5cbx3SqU8THc";
    private static final String SECRET_KEY = "oHjqVsBtZU8PYDSfrZTcxYlI";
    private static final String CURRENCY = "INR";

    public TransactionDetails createTransaction(Double amount) {

        try  {
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("amount", (amount * 100));
            jsonObject.put("currency", CURRENCY);


            RazorpayClient razorpayClient = new RazorpayClient(KEY, SECRET_KEY);
            Order order = razorpayClient.orders.create(jsonObject);

            return prepareTransactionDetails(order);
        }

        catch (Exception e) {
            System.out.println(e.getMessage());
        }

        return null;
    }

    @Override
    public TransactionDetails prepareTransactionDetails(Order order) {
        String orderId = order.get("id");
        String currency = order.get("currency");
        Integer amount = order.get("amount");

        TransactionDetails transactionDetails = new TransactionDetails(orderId, currency, amount, KEY);
        return transactionDetails;
    }
}
