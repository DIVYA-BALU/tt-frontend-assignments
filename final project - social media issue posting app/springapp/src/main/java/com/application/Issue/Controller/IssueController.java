package com.application.Issue.Controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.application.Issue.Model.Issue;
import com.application.Issue.Service.IssueService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/issue")
public class IssueController {
    
    @Autowired
    private IssueService issueService;

    @GetMapping
    public ResponseEntity<List<Issue>> getAllIssues() {
        List<Issue> issue = issueService.findAllIssues();
        return new ResponseEntity<>(issue, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Issue> addIssue(@ModelAttribute Issue issue, @RequestParam MultipartFile imageFile) throws IOException {
        System.out.println(issue);
        Issue newIssue = issueService.addIssue(issue, imageFile);
        return new ResponseEntity<>(newIssue, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Issue> updateIssue(@PathVariable String issueId, @RequestBody Issue issue) {
        Issue updatedIssue = issueService.updateIssue(issueId, issue);
        return new ResponseEntity<>(updatedIssue, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{issueId}")
    public ResponseEntity<?> deleteIssue(@PathVariable("issueId") String issueId) {
        issueService.deleteIssue(issueId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{issueId}")
    public ResponseEntity<Issue> getIssueByIssueId(@PathVariable("issueId") String issueId) {
        Issue issue = issueService.getIssueByIssueId(issueId);
        return new ResponseEntity<>(issue, HttpStatus.OK);
    }

    @GetMapping("/locations/{location}")
    public ResponseEntity<List<Issue>> getIssuesByLocation(@PathVariable("location") String location) {
        List<Issue> issues = issueService.getIssuesByLocation(location);
        return new ResponseEntity<>(issues, HttpStatus.OK);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Issue>> getIssueByUserId(@PathVariable("userId") String userId) {
        List<Issue> issues = issueService.getIssuesByUserId(userId);
        return new ResponseEntity<>(issues, HttpStatus.OK);
    }

}
