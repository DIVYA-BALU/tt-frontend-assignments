package com.project.storeadministration.service;

import com.project.storeadministration.model.Investment;

public interface InvestmentService {
  
  Investment saveInvestment(Investment investment);

  Investment getTotalInvestment();
}
