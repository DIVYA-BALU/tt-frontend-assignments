package com.application.Issue.Service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.application.Issue.Model.Issue;

public interface IssueService {

    public Issue addIssue(Issue issue, MultipartFile imageFile) throws IOException;
    public List<Issue> findAllIssues();
    public Issue updateIssue(String issueId, Issue issue);
    public void deleteIssue(String issueId);
    public Issue getIssueByIssueId(String issueId);
    public List<Issue> getIssuesByLocation(String location);
    public List<Issue> getIssuesByUserId(String userId);
}
