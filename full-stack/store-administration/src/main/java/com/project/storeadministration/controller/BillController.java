package com.project.storeadministration.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.storeadministration.dto.IncomeStatement;
import com.project.storeadministration.dto.Revenue;
import com.project.storeadministration.model.Bill;
import com.project.storeadministration.service.BillService;

@RestController
@RequestMapping("bills")
@CrossOrigin("*")
public class BillController {

  @Autowired
  private BillService billService;

  @PostMapping
  public ResponseEntity<Bill> saveBranch(@RequestBody Bill bill) {
    return new ResponseEntity<Bill>(billService.saveBill(bill), HttpStatus.OK);
  }

  @GetMapping("/revenue")
  public ResponseEntity<Revenue> getReveneue() {
    return new ResponseEntity<Revenue>(billService.getRevenue(), HttpStatus.OK);
  }

  @GetMapping("/branchWiseAnalysis")
  public ResponseEntity<Page<IncomeStatement>> getBranchWiseAnalysis(@RequestParam(defaultValue = "0") int pageNo,
      @RequestParam(defaultValue = "10") int pageSize) {
    return new ResponseEntity<Page<IncomeStatement>>(billService.getBranchWiseIncomeStatement(pageNo, pageSize),
        HttpStatus.OK);
  }

  @GetMapping("/sectionWiseAnalysis")
  public ResponseEntity<Page<IncomeStatement>> getSectionWiseAnalysis(@RequestParam(defaultValue = "0") int pageNo,
  @RequestParam(defaultValue = "10") int pageSize) {
    return new ResponseEntity<Page<IncomeStatement>>(billService.getSectionWiseIncomeStatement(pageNo, pageSize), HttpStatus.OK);
  }

  @GetMapping("/sectionWiseAnalysisForBranch")
  public ResponseEntity<List<IncomeStatement>> getSectionWiseIncomeStatementForBranch(@RequestParam String branchId,@RequestParam(required =false) LocalDate date){
    return new ResponseEntity<List<IncomeStatement>>(billService.getSectionWiseStatementForBranch(branchId,date), HttpStatus.OK);
  }
}
