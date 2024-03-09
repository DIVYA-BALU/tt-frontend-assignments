package com.project.storeadministration.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Page;

import com.project.storeadministration.dto.IncomeStatement;
import com.project.storeadministration.dto.Revenue;
import com.project.storeadministration.model.Bill;

public interface BillService {

  Bill saveBill(Bill bill);

  Revenue getRevenue();

  Page<IncomeStatement> getBranchWiseIncomeStatement(int pageNo, int pageSize);

  Page<IncomeStatement> getSectionWiseIncomeStatement(int pageNo, int pageSize);

  Page<IncomeStatement> getSectionWiseStatementForBranch(int pageNo, int pageSize, String branchId);

  Page<IncomeStatement> getDateWiseIncomeStatementForSection(int pageNo, int pageSize, String branchId,
      String sectionId);
  
}
