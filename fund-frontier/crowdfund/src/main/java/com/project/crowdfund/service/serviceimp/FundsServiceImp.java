package com.project.crowdfund.service.serviceimp;


import org.json.JSONObject;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.project.crowdfund.Repository.FundsRepository;
import com.project.crowdfund.model.Funds;
import com.project.crowdfund.service.FundsService;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FundsServiceImp implements FundsService{
    private final FundsRepository fundsRepository;
        
    @Override
    public Funds saveFunds(Funds funds, Double amount) {
        final String KEY = "rzp_test_dfaTwJvV84YGAu";
        final String SECRET_KEY = "34LUS8qkvkNUz8HBZDBUhOtX";
        final String CURRENCY = "INR";

        try {
			JSONObject jsonObject = new JSONObject();
			jsonObject.put("amount", amount * 100);
			jsonObject.put("currency", CURRENCY);
			RazorpayClient razorpayClient = new RazorpayClient(KEY, SECRET_KEY);
			Order order = razorpayClient.orders.create(jsonObject);
            Double totalAmount = order.get("amount");
            return fundsRepository.save(funds);
			
		}catch (Exception e) {
			e.printStackTrace();
		}
        return fundsRepository.save(funds);
    }

    @Override
    public Page<Funds> getAllFunds(Integer pageNo, Integer pageSize) {
         PageRequest pageRequest = PageRequest.of(pageNo, pageSize);
        Page<Funds> pagingFunds = fundsRepository.findAll(pageRequest);
        return pagingFunds;
    }
    
}
