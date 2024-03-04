package com.petAdoption.petPalFinder.services.implementation;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.petAdoption.petPalFinder.models.TransactionDetails;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;

@Service
public class TranctionDetailServiceImpl {
    @Value("${razorpay.api.key}")
    private String apiKey;

    @Value("${razorpay.api.secret}")
    private String apiSecret;

    @Value("${razorpay.currency}")
    private String currency;

    @Value("${razorpay.company.name}")
    private String company;

    @Transactional
    public TransactionDetails createTransaction(double amount) {
        try {
            RazorpayClient razorpayClient = new RazorpayClient(apiKey, apiSecret);

            JSONObject orderRequest = new JSONObject();

            orderRequest.put("amount", amount * 100);
            orderRequest.put("currency", currency);
            orderRequest.put("receipt", "order_rcptid_" + System.currentTimeMillis());
            orderRequest.put("payment_capture", 1);

            Order order = razorpayClient.orders.create(orderRequest);

            System.out.println(order);
            Integer receivedamount = order.get("amount");
            int getAmount = receivedamount / 100;
            TransactionDetails transactionDetails = TransactionDetails.builder()
                    .orderId(order.get("id"))
                    .currency(order.get("currency"))
                    .amount(getAmount)
                    .key(apiKey)
                    .build();

            return transactionDetails;

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
