package com.project.crowdfund.service;


import java.math.BigDecimal;

import org.springframework.data.domain.Page;

import com.project.crowdfund.model.Funds;

public interface FundsService {

    Funds saveFunds(Funds funds, Double amount);

    Page<Funds> getAllFunds(Integer pageNo, Integer pageSize);
    
}
