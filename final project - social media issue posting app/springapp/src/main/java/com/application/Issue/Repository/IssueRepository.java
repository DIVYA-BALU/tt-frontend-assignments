package com.application.Issue.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.application.Issue.Model.Issue;

@Repository
public interface IssueRepository  extends MongoRepository<Issue, String> {

    void deleteIssueById(String issueId);

    Issue getIssueById(String issueId);
    
    List<Issue> getIssuesByLocation(@Param("location") String location);

    List<Issue> findIssuesByUserId(String userId);
}
