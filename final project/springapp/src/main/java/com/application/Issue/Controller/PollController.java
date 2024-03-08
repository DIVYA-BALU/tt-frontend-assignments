package com.application.Issue.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.Issue.Model.Poll;
import com.application.Issue.Service.PollService;

@RestController

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/poll")
public class PollController {
    
    @Autowired
    private PollService pollService;

    @GetMapping
    public ResponseEntity<List<Poll>> findAllPolls() {
        List<Poll> poll = pollService.findAllPolls();
        return new ResponseEntity<>(poll, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Poll> addPoll(@RequestBody Poll poll) {
        Poll newPoll = pollService.addPoll(poll);
        return new ResponseEntity<>(newPoll, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Poll> updatePoll(@RequestBody Poll poll) {
        Poll updatedPoll = pollService.updatePoll(poll);
        return new ResponseEntity<>(updatedPoll, HttpStatus.OK);
    }

    @GetMapping("/userId/{userId}")
    public ResponseEntity<List<Poll>> getPollsByUserId(@PathVariable("userId") String userId) {
        List<Poll> poll = pollService.getPollsByUserId(userId);
        return new ResponseEntity<>(poll, HttpStatus.OK);
    }

    @GetMapping("/issueId/{issueId}/userId/{userId}")
    public ResponseEntity<List<Poll>> getPollsByIssueIdAndUserID(@PathVariable("issueId") String issueId, @PathVariable("userId") String userId) {
        List<Poll> poll = pollService.getPollsByIssueIdAndUserID(issueId, userId);
        return new ResponseEntity<>(poll, HttpStatus.OK);
    }

    @GetMapping("/issueId/{issueId}")
    public ResponseEntity<List<Poll>> getPollsByIssueId(@PathVariable("issueId") String issueId) {
        List<Poll> poll = pollService.getPollsByIssueId(issueId);
        return new ResponseEntity<>(poll, HttpStatus.OK);
    }

    @GetMapping("/optionPercentagesByIssue")
    public ResponseEntity<Map<String, Map<String, Double>>> getOptionPercentagesByIssue() {
        Map<String, Map<String, Double>> optionPercentages = pollService.getOptionPercentagesByIssue();
        return new ResponseEntity<>(optionPercentages, HttpStatus.OK);
    }
}
