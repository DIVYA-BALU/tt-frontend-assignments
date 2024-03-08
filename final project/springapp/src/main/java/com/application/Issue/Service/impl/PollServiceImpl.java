package com.application.Issue.Service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.Issue.Model.Poll;
import com.application.Issue.Repository.PollRepository;
import com.application.Issue.Service.PollService;

@Service
public class PollServiceImpl implements PollService {
    
    @Autowired
    private  PollRepository pollRepo;


    public Poll addPoll(Poll poll) {
        
        if (poll.getId() == null) {
            Poll pollObj = new Poll();
            pollObj.setIssueId(poll.getIssueId());
            pollObj.setUserId(poll.getUserId());
            pollObj.setPollOption(poll.getPollOption());

            return pollRepo.save(pollObj);
        }

        else return pollRepo.save(poll);
    }

    public Poll updatePoll(Poll poll) {
        return pollRepo.save(poll);
    }
  

    public List<Poll> findAllPolls() {
        return pollRepo.findAll();
    }

    public List<Poll> getPollsByUserId(String userId) {
        return pollRepo.findPollsByUserId(userId);
    }

    public List<Poll> getPollsByIssueId(String issueId) {
        return pollRepo.findPollsById(issueId);
    }

    public List<Poll> getPollsByIssueIdAndUserID(String issueId, String userId) {
        return pollRepo.findPollsByIssueIdAndUserId(issueId, userId);
    }

    public Map<String, Map<String, Double>> getOptionPercentagesByIssue() {
        List<Poll> allPolls = findAllPolls();
        Map<String, Map<String, Double>> optionPercentagesByIssue = new HashMap<>();

        for (Poll poll : allPolls) {
            String issueId = poll.getIssueId();
            Map<String, Double> optionPercentages = optionPercentagesByIssue.getOrDefault(issueId, new HashMap<>());

            String selectedOption = poll.getPollOption();
            optionPercentages.put(selectedOption, optionPercentages.getOrDefault(selectedOption, 0.0) + 1);
            optionPercentagesByIssue.put(issueId, optionPercentages);
        }

        for (Map.Entry<String, Map<String, Double>> entry : optionPercentagesByIssue.entrySet()) {
            Map<String, Double> optionPercentages = entry.getValue();
            Long totalVotes = optionPercentages.values().stream().mapToLong(Double::longValue).sum();

            optionPercentages.forEach((option, count) -> {
                double percentage = (count / totalVotes) * 100;
                optionPercentages.put(option, percentage);
            });
        }

        return optionPercentagesByIssue;
    }
}
