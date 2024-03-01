package com.project.storeadministration.service.implementations;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.project.storeadministration.model.Section;
import com.project.storeadministration.repository.CustomBranchRepository;
import com.project.storeadministration.repository.SectionRepository;
import com.project.storeadministration.service.SectionService;

@Service
public class SectionServiceImplementation implements SectionService {

  @Autowired
  private SectionRepository sectionRepository;

  @Autowired
  private CustomBranchRepository customBranchRepository;

  @Override
  public Section saveSection(Section section) {
    Section savedSection = sectionRepository.save(section);
    customBranchRepository.addSections(savedSection);
    return savedSection;
  }

  @Override
  public Page<Section> getAllSections(int pageNo, int pageSize) {
    PageRequest pageable = PageRequest.of(pageNo, pageSize);
    return sectionRepository.findAll(pageable);
  }

  @Override
  public List<Section> getSections() {
    return sectionRepository.findAll();
  }
}
