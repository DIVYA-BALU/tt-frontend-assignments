package com.application.Issue.Service;

import java.util.List;
import java.util.Map;

import com.application.Issue.Model.Poll;

public interface PollService {
    
    public Poll addPoll(Poll poll);
    public Poll updatePoll(Poll poll);
    public List<Poll> findAllPolls();
    public List<Poll> getPollsByUserId(String userId);
    public List<Poll> getPollsByIssueId(String issueId);
    public List<Poll> getPollsByIssueIdAndUserID(String issueId, String userId);
    public Map<String, Map<String, Double>> getOptionPercentagesByIssue();
}
