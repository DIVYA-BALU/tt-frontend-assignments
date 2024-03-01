package com.project.storeadministration.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.storeadministration.exception.CustomException;
import com.project.storeadministration.model.Branch;
import com.project.storeadministration.service.BranchService;

@CrossOrigin("*")
@RestController
@RequestMapping("/branches")
public class BranchController {
  @Autowired
  private BranchService branchService;

  @PostMapping
  public ResponseEntity<Branch> saveBranch(@RequestBody Branch branch) {
    return new ResponseEntity<Branch>(branchService.saveBranch(branch), HttpStatus.OK);
  }

  @PostMapping("/{branchId}/addSection")
  public ResponseEntity<Branch> saveSection(@PathVariable("branchId") String branchId,
      @RequestParam("sectionId") String sectionId) throws CustomException {
    return new ResponseEntity<Branch>(branchService.addSectionDetails(branchId, sectionId), HttpStatus.OK);
  }

  @GetMapping
  public ResponseEntity<List<Branch>> getSections() {
    return new ResponseEntity<List<Branch>>(branchService.getAllBranches(), HttpStatus.OK);
  }

  @GetMapping("/page")
  public ResponseEntity<Page<Branch>> getAllBranches(@RequestParam(defaultValue = "0") int pageNo,
      @RequestParam(defaultValue = "10") int pageSize) {
    return new ResponseEntity<Page<Branch>>(branchService.getPaginationBranches(pageNo, pageSize), HttpStatus.OK);
  }
}
