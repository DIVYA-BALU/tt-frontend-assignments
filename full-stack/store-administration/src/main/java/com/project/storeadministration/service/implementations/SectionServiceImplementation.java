package com.project.storeadministration.service.implementations;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.storeadministration.model.Section;
import com.project.storeadministration.repository.SectionRepository;
import com.project.storeadministration.service.SectionService;

@Service
public class SectionServiceImplementation implements SectionService {

  @Autowired
  private SectionRepository sectionRepository;

  @Override
  public Section saveSection(Section section) {
    return sectionRepository.save(section);
  }

  @Override
  public List<Section> getAllSections() {
    return sectionRepository.findAll();
  }
}
