package com.project.storeadministration.repository;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import com.project.storeadministration.model.Branch;
import com.project.storeadministration.model.Section;
import com.project.storeadministration.model.SectionDetail;

@Repository
public class CustomBranchRepository {

  @Autowired
  private MongoTemplate mongoTemplate;


  public void addSections(Section section) {
    Query query = new Query();
    Update update = new Update().push("sectionDetails",
        SectionDetail.builder().section(section).createdDate(LocalDate.now()));
    mongoTemplate.updateMulti(query, update, "branches");
  }
}
