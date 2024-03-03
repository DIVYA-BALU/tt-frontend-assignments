package com.project.storeadministration.service;

import org.springframework.data.domain.Page;

import com.project.storeadministration.dto.IncomeStatement;
import com.project.storeadministration.dto.Revenue;
import com.project.storeadministration.model.Bill;

public interface BillService {

  Bill saveBill(Bill bill);

  Revenue getRevenue();

  Page<IncomeStatement> getBranchWiseIncomeStatement(int pageNo, int pageSize);

  Page<IncomeStatement> getSectionWiseIncomeStatement(int pageNo, int pageSize);

  Page<IncomeStatement> getSectionWiseStatementByBranch(String branchId, int pageNo, int pageSize);

  Page<IncomeStatement> getDateWiseStatementByBranchAndSection(String branchId, String sectionId, int pageNo,
      int pageSize);

  Page<IncomeStatement> getMonthWiseStatementByBranchAndSection(String branchId, String sectionId, int pageNo,
      int pageSize);
}
