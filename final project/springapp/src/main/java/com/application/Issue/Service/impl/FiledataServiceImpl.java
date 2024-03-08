package com.application.Issue.Service.impl;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.application.Issue.Model.FileData;
import com.application.Issue.Repository.FileDataRepository;
import com.application.Issue.Service.FileDataService;

@Service
public class FiledataServiceImpl implements FileDataService {
    
    @Autowired
    private FileDataRepository fileDataRepository;

    private final String FOLDER_PATH = "D:\\TrusTrace Projects\\Issue_Reporting_Application_V1\\springapp\\src\\main\\resources\\static\\images";

    @Value("${file.upload-dir-issue-images}")
    private String uploadDir;

    @Value("${file.upload-dir}")
    private String uploadPath;
    
    public FileData uploadImageToFileSystem(MultipartFile file,String userId, String issueId) throws IOException {
        String filePath=FOLDER_PATH+file.getOriginalFilename();
        FileData fileData=fileDataRepository.save(FileData.builder()
                .name(file.getOriginalFilename())
                .userId(userId)
                .issueId(issueId)
                .filePath(filePath).build());
        file.transferTo(new File(filePath));
        return fileData;
    }

    public FileData downloadImageFromFileSystem(String issueId) throws IOException {
        FileData fileData = fileDataRepository.findByIssueId(issueId).orElse(null);
        return fileData;
    }

    // public String generateImageUrl(String issueId, MultipartFile imageFile) throws IOException {
    //     if (imageFile != null && !imageFile.isEmpty()) {
    //         String fileName = StringUtils.cleanPath(imageFile.getOriginalFilename());
    //         String fileExtension = FilenameUtils.getExtension(fileName);
    //         String newFilename = issueId + "." + fileExtension;

    //         String filePath = uploadDir + "/" + newFilename;
    //         String fileStoragePath = uploadPath + "/" + "/issuePost" + "/" + newFilename;

    //         try (InputStream inputStream = imageFile.getInputStream()) {
    //             Files.copy(inputStream, Paths.get(fileStoragePath), StandardCopyOption.REPLACE_EXISTING);
    //         }
    //         return filePath;
    //     }

    //     return null;
    // }
}

