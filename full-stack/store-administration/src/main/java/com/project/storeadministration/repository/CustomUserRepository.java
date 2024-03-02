package com.project.storeadministration.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import com.project.storeadministration.model.AttendanceDetail;
import com.project.storeadministration.model.User;

@Repository
public class CustomUserRepository {

  @Autowired
  private MongoTemplate mongoTemplate;

  public User updateSection(String userId, String sectionId) {
    Query query = new Query(Criteria.where("_id").is(userId));
    Update update = new Update().set("sectionId", sectionId);
    mongoTemplate.updateFirst(query, update, User.class);
    return mongoTemplate.findOne(query, User.class);
  }

  public Page<User> getUsers(String branchId, String sectionId, Pageable pageable) {
    Query query = new Query(Criteria.where("user.branchesId").in(branchId));

    if (sectionId != null) {
      query.addCriteria(Criteria.where("user.sectionId").is(sectionId));
    }

    long total = mongoTemplate.count(query, AttendanceDetail.class);
    query.with(pageable);
    List<User> users = mongoTemplate.find(query, User.class);

    return new PageImpl<>(users, pageable, total);
  }
}
