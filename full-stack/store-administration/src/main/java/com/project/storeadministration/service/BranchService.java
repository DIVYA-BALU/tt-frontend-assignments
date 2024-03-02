package com.project.storeadministration.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.project.storeadministration.exception.CustomException;
import com.project.storeadministration.model.Branch;

public interface BranchService {
  Branch saveBranch(Branch branch);

  Branch addSectionDetails(String branchId, String sectionId) throws CustomException;

  Page<Branch> getPaginatedBranches(int pageNo, int pageSize);

  List<Branch> getAllBranches();
}
