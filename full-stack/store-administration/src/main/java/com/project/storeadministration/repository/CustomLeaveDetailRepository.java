package com.project.storeadministration.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.project.storeadministration.model.AttendanceDetail;
import com.project.storeadministration.model.LeaveDetail;

@Repository
public class CustomLeaveDetailRepository {

  @Autowired
  private MongoTemplate mongoTemplate;

  public LeaveDetail findByUserIdAndDate(String userId, LocalDate date) {
    Query query = new Query();
    query.addCriteria(Criteria.where("user.userId").is(userId).and("date").is(date));

    return mongoTemplate.findOne(query, LeaveDetail.class);
  }

  public Page<LeaveDetail> getLeaveDetails(String branchId, String sectionId, LocalDate date,
      Pageable pageable) {
    Query query = new Query(Criteria.where("user.branchIds").in(branchId).and("date").is(date));

    if (sectionId != null) {
      query.addCriteria(Criteria.where("user.sectionId").is(sectionId));
    }

    long total = mongoTemplate.count(query, AttendanceDetail.class);
    query.with(pageable);
    List<LeaveDetail> results = mongoTemplate.find(query, LeaveDetail.class);

    return new PageImpl<>(results, pageable, total);
  }
}
