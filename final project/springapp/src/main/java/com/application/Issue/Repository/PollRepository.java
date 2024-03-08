package com.application.Issue.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.application.Issue.Model.Poll;

@Repository
public interface PollRepository extends MongoRepository<Poll,String> {
    
    List<Poll> findPollsByUserId(String userId);

    // List<Poll> findPollsById(String issueId);

    List<Poll> findPollsById(String _id);

    List<Poll> findPollsByIssueIdAndUserId(String issueId, String userId);
    
}
