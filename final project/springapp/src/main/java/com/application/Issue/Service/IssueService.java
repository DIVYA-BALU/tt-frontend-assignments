package com.application.Issue.Service;

import java.util.List;

import com.application.Issue.Model.Issue;

public interface IssueService {

    public Issue addIssue(Issue issue);
    public List<Issue> findAllIssues();
    public Issue updateIssue(Issue issue);
    public void deleteIssue(String issueId);
    public Issue getIssueByIssueId(String issueId);
    public List<Issue> getIssuesByLocation(String location);
    public List<Issue> getIssuesByUserId(String userId);
}
