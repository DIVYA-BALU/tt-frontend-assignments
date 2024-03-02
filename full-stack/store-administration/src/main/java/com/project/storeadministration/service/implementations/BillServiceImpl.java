package com.project.storeadministration.service.implementations;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.storeadministration.model.Bill;
import com.project.storeadministration.repository.BillRepository;
import com.project.storeadministration.service.BillService;

@Service
public class BillServiceImpl implements BillService{
  
  @Autowired
  private BillRepository billRepository;
  
  @Override
  public Bill saveBill(Bill bill) {
    bill.setDate(LocalDate.now());
    return billRepository.save(bill);
  }
}
