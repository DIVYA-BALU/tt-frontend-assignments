package com.application.Issue.Service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.Issue.Model.Issue;
import com.application.Issue.Repository.IssueRepository;
import com.application.Issue.Service.IssueService;

@Service
public class IssueServiceImpl implements IssueService {
    
    @Autowired
    private IssueRepository issueRepo;

    public Issue addIssue(Issue issue) {
        return issueRepo.save(issue);
    }

    public List<Issue> findAllIssues() {
        return issueRepo.findAll();
    }

    public Issue updateIssue(Issue issue) {
        return issueRepo.save(issue);
    }
  
    public void deleteIssue(String issueId) {
        issueRepo.deleteIssueById(issueId);
    }

    public Issue getIssueByIssueId(String issueId) {
        return issueRepo.getIssueById(issueId);
    }

    public List<Issue> getIssuesByLocation(String location) {
        return issueRepo.getIssuesByLocation(location);
    }
    
    public List<Issue> getIssuesByUserId(String userId){
        return issueRepo.findIssuesByUserId(userId);
    }

}
