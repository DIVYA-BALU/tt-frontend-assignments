package com.application.Issue.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.application.Issue.Model.FileData;

import java.util.Optional;

public interface FileDataRepository extends MongoRepository<FileData, String> {

    Optional<FileData> findByName(String fileName);

	Optional<FileData> findByIssueId(String issueId);
}
