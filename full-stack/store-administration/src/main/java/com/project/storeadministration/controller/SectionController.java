package com.project.storeadministration.controller;

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

import com.project.storeadministration.model.Section;
import com.project.storeadministration.service.SectionService;

@RestController
@CrossOrigin("*")
@RequestMapping("sections")
public class SectionController {

  @Autowired
  private SectionService sectionService;

  @GetMapping("page")
  public ResponseEntity<Page<Section>> getAllSections(@RequestParam(defaultValue = "0") int pageNo,
      @RequestParam(defaultValue = "10") int pageSize) {
    return new ResponseEntity<Page<Section>>(sectionService.getAllSections(pageNo, pageSize), HttpStatus.OK);
  }

  @GetMapping
  public ResponseEntity<List<Section>> getSections() {
    return new ResponseEntity<List<Section>>(sectionService.getSections(), HttpStatus.OK);
  }

  @PostMapping
  public ResponseEntity<Section> saveSection(@RequestBody Section section) {
    return new ResponseEntity<Section>(sectionService.saveSection(section), HttpStatus.OK);
  }
}
