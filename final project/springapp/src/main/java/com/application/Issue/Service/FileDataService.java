package com.application.Issue.Service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.application.Issue.Model.FileData;

public interface FileDataService {

    public FileData uploadImageToFileSystem(MultipartFile file,String userId, String issueId) throws IOException;
    public FileData downloadImageFromFileSystem(String issueId) throws IOException;
    // public String generateImageUrl(String issueId, MultipartFile imageFile) throws IOException;

}

