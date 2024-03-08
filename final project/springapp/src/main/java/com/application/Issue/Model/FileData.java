package com.application.Issue.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "file_data")
public class FileData {

    @Id
    private String id;
    private String userId;
    private String issueId;
    private String name;
    private String filePath;

}

