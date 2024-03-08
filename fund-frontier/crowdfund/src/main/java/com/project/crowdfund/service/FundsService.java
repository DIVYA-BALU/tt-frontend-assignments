package com.project.crowdfund.service;


import org.springframework.data.domain.Page;

import com.project.crowdfund.model.Funds;

public interface FundsService {

    Funds saveFunds(Funds funds);

    Page<Funds> getAllFunds(Integer pageNo, Integer pageSize);
    
}
