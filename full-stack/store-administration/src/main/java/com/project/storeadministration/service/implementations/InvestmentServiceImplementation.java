package com.project.storeadministration.service.implementations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.storeadministration.model.Investment;
import com.project.storeadministration.repository.CustomInvestmentRepository;
import com.project.storeadministration.repository.InvestmentRepository;
import com.project.storeadministration.service.InvestmentService;

@Service
public class InvestmentServiceImplementation implements InvestmentService{

  @Autowired
  private InvestmentRepository investmentRepository;

  @Autowired
  private CustomInvestmentRepository customInvestmentRepository;

  @Override
  public Investment saveInvestment(Investment investment) {
    return investmentRepository.save(investment);
  }

  @Override
  public Investment getTotalInvestment() {
    System.out.println("here in service");
    saveInvestment(new Investment("",50000,""));
    return new Investment("",customInvestmentRepository.getTotalInvestment(),"");
  }
}
