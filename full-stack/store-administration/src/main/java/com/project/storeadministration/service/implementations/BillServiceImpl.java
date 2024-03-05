package com.project.storeadministration.service.implementations;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.project.storeadministration.dto.IncomeStatement;
import com.project.storeadministration.dto.Revenue;
import com.project.storeadministration.model.Bill;
import com.project.storeadministration.model.BillItem;
import com.project.storeadministration.model.Product;
import com.project.storeadministration.repository.BillRepository;
import com.project.storeadministration.repository.CustomBillRepository;
import com.project.storeadministration.repository.ProductRepository;
import com.project.storeadministration.service.BillService;
import com.project.storeadministration.service.ProductService;

@Service
public class BillServiceImpl implements BillService {

  @Autowired
  private BillRepository billRepository;

  @Autowired
  private CustomBillRepository customBillRepository;

  @Autowired
  private ProductRepository productRepository;

  @Autowired
  private ProductService productService;
  
  @Override
  public Bill saveBill(Bill bill) {
    bill.setDate(LocalDate.now());

    List<BillItem> billItems = bill.getBillItems();

    for(BillItem billItem: billItems)
    {
      productService.updateQuantity(billItem.getProduct().get_id(),-billItem.getQuantity());
    }

    return billRepository.save(bill);
  }

  @Override
  public Revenue getRevenue() {
    return new Revenue(customBillRepository.getRevenue());
  }

  @Override
  public Page<IncomeStatement> getBranchWiseIncomeStatement(int pageNo, int pageSize) {
    PageRequest pageable = PageRequest.of(pageNo, pageSize);
    return customBillRepository.getBranchWiseIncomeStatement(pageable);
  }

  @Override
  public Page<IncomeStatement> getSectionWiseIncomeStatement(int pageNo, int pageSize) {
    PageRequest pageable = PageRequest.of(pageNo, pageSize);
    return customBillRepository.getSectionWiseIncomeStatement(pageable);
  }
  
  @Override
  public Page<IncomeStatement> getSectionWiseStatementByBranch(String branchId, int pageNo, int pageSize) {
    // update the quantity to the backend when bill is added
    // create three tables for financial analysis
    // employee enrollment
    // correct the paginations of all pages
    // permission based billing-directives
    // backend permission/role based
    // employee page attendance marking and billing (alloted)
    // manager page employee listing(option by branches)
    // TODO Auto-generated method stub
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getSectionWiseStatementByBranch'");
  }

  @Override
  public Page<IncomeStatement> getDateWiseStatementByBranchAndSection(String branchId, String sectionId, int pageNo,
      int pageSize) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getDateWiseStatementByBranchAndSection'");
  }

  @Override
  public Page<IncomeStatement> getMonthWiseStatementByBranchAndSection(String branchId, String sectionId, int pageNo,
      int pageSize) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getMonthWiseStatementByBranchAndSection'");
  }
}
