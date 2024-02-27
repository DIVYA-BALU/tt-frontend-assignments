package com.project.storeadministration.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.storeadministration.model.Section;
import com.project.storeadministration.service.SectionService;

@RestController
@RequestMapping("sections")
public class SectionController {

  @Autowired
  private SectionService sectionService;

  @GetMapping
  public ResponseEntity<List<Section>> getAllSections() {
    return new ResponseEntity<List<Section>>(sectionService.getAllSections(), HttpStatus.OK);
  }

  @PostMapping
  public ResponseEntity<Section> saveSection(@RequestBody Section section) {
    return new ResponseEntity<Section>(sectionService.saveSection(section), HttpStatus.OK);
  }
}
