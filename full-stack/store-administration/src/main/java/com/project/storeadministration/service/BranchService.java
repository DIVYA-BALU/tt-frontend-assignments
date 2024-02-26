package com.project.storeadministration.service;

import java.util.List;

import com.project.storeadministration.exception.CustomException;
import com.project.storeadministration.model.Branch;

public interface BranchService {
  Branch saveBranch(Branch branch);

  Branch addSectionDetails(String branchId, String sectionId) throws CustomException;

  List<Branch> getAllBranches();
}
