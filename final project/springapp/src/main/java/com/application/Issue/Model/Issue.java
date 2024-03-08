package com.application.Issue.Model;

import org.springframework.data.mongodb.core.mapping.Document;

import org.springframework.data.annotation.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "issue")
public class Issue {

    @Id
    private String id;
    // private String issueId;
    private String userId;
    private String location;
    private String landmark;
    private String issueType;
    private String issue;
    private String image;

}
