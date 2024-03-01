package com.project.storeadministration.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.project.storeadministration.model.Section;

public interface SectionService {
  Section saveSection(Section section);

  Page<Section> getAllSections(int pageNo, int pageSize);

  List<Section> getSections();
}
