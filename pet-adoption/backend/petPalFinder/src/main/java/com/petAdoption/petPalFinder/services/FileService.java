package com.petAdoption.petPalFinder.services;

import org.springframework.web.multipart.MultipartFile;

public interface FileService{
    public String saveFile(MultipartFile file,String folder);
}
