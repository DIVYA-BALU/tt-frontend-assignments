package com.project.storeadministration.service;

import java.util.List;

import com.project.storeadministration.model.Section;

public interface SectionService {
  Section saveSection(Section section);

  List<Section> getAllSections();
}
