package com.project.storeadministration.service.implementations;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.project.storeadministration.exception.CustomException;
import com.project.storeadministration.model.Branch;
import com.project.storeadministration.model.Section;
import com.project.storeadministration.model.SectionDetail;
import com.project.storeadministration.model.User;
import com.project.storeadministration.repository.BranchRepository;
import com.project.storeadministration.repository.SectionRepository;
import com.project.storeadministration.service.BranchService;

@Service
public class BranchServiceImplementation implements BranchService {

  @Autowired
  private BranchRepository branchRepository;

  @Autowired
  private SectionRepository sectionRepository;

  @Override
  public Branch saveBranch(Branch branch) {
    branch.setCreatedDate(LocalDate.now());
    return branchRepository.save(branch);
  }

  @Override
  public Branch addSectionDetails(String branchId, String sectionId) throws CustomException {
    Optional<Branch> optionalBranch = branchRepository.findBy_id(sectionId);

    if (!optionalBranch.isPresent())
      throw new CustomException("Branch Not Exists");

    Branch branch = optionalBranch.get();

    Optional<Section> optionalSection = sectionRepository.findBy_id(sectionId);

    if (!optionalSection.isPresent())
      throw new CustomException("Section Not Exists");

    Section section = optionalSection.get();

    SectionDetail sectionDetail = new SectionDetail(section, LocalDate.now());
    branch.getSectionDetails().add(sectionDetail);
    return branchRepository.save(branch);
  }

  @Override
  public Page<Branch> getPaginationBranches(int pageNo, int pageSize) {
    PageRequest pageable = PageRequest.of(pageNo, pageSize);
    return branchRepository.findAll(pageable);
  }

  @Override
  public List<Branch> getAllBranches() {
    return branchRepository.findAll();
  }
}
