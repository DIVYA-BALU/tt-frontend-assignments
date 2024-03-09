package com.application.Issue.Service.impl;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.naming.NameNotFoundException;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.application.Issue.Model.Issue;
import com.application.Issue.Repository.IssueRepository;
import com.application.Issue.Service.IssueService;
import org.springframework.web.multipart.MultipartFile;

@Service
public class IssueServiceImpl implements IssueService {
    
    @Autowired
    private IssueRepository issueRepo;

    @Value("${file.upload-dir-issue-images}")
    private String uploadDir;

    @Value("${file.upload-dir}")
    private String path;

    public Issue addIssue(Issue issue, MultipartFile imageFile) throws IOException {
        validateImageFile(imageFile);
        Issue savedIssue = issueRepo.save(issue);
        savedIssue.setImage(generateImageUrl(savedIssue.getId(), imageFile));
        return issueRepo.save(savedIssue);
    }

    private void validateImageFile(MultipartFile imageFile) {
        if (imageFile != null && !imageFile.isEmpty()) {
            String fileExtension = FilenameUtils.getExtension(imageFile.getOriginalFilename());
            if (!Arrays.asList("jpg", "jpeg", "png").contains(fileExtension.toLowerCase())) {
                throw new IllegalArgumentException("Invalid image file type");
            }
        }
    }

     private String generateImageUrl(String recipeId, MultipartFile imageFile) throws IOException {
        if (imageFile != null && !imageFile.isEmpty()) {
            String fileName = StringUtils.cleanPath(imageFile.getOriginalFilename());
            String fileExtension = FilenameUtils.getExtension(fileName);
            String newFileName = recipeId + "." + fileExtension;

            String filePath = uploadDir + "/" + newFileName;

            String fileStorePath = path +  "/" + newFileName;

            try (InputStream inputStream = imageFile.getInputStream()) {
                Files.copy(inputStream, Paths.get(fileStorePath), StandardCopyOption.REPLACE_EXISTING);
            }
            return filePath;
        }
        return null;
    }

    public List<Issue> findAllIssues() {
        return issueRepo.findAll();
    }

    public Issue updateIssue(String issueId, Issue issue) {
        Optional<Issue> existingIssue = issueRepo.findById(issueId);

        if (existingIssue.isPresent()) {
            Issue existing = existingIssue.get();
            existing.setLandmark(issue.getLandmark());
            existing.setIssue(issue.getIssue());

            return issueRepo.save(existing);
        }

        return null;
    }
  
    public void deleteIssue(String issueId) {
        issueRepo.deleteIssueById(issueId);
    }

    public Issue getIssueByIssueId(String issueId) {
        return issueRepo.getIssueById(issueId);
    }

    public List<Issue> getIssuesByLocation(String location) {
        return issueRepo.getIssuesByLocation(location);
    }
    
    public List<Issue> getIssuesByUserId(String userId){
        return issueRepo.findIssuesByUserId(userId);
    }

}
