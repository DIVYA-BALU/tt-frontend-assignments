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

  public Page<User> getUsers(String branchId, String searchByName, Pageable pageable) {
    Query query = new Query();

    if (searchByName != null && !searchByName.isEmpty()) {
      query.addCriteria(Criteria.where("name").regex(searchByName, "i"));
    }

    if (branchId != null && !branchId.isEmpty()) {
      query.addCriteria(Criteria.where("branchIds").in(branchId));
    }

    query.fields().exclude("password");
    long total = mongoTemplate.count(query, User.class);
    query.with(pageable);
    List<User> users = mongoTemplate.find(query, User.class);
    return new PageImpl<>(users, pageable, total);
  }
}
