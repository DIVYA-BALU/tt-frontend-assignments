package com.application.Issue.Controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.application.Issue.Model.FileData;
import com.application.Issue.Service.FileDataService;

@RestController
@RequestMapping("/image")
@CrossOrigin(origins = "http://localhost:4200")
public class FileDataController {

	@Autowired
	private FileDataService service;

    @PostMapping("/fileSystem/{userid}/{issueid}")
	public ResponseEntity<FileData> uploadImageToFIleSystem(@RequestParam("image")MultipartFile file,@PathVariable("userid") String userid,@PathVariable("issueid") String issueid) throws IOException {
		FileData uploadImage = service.uploadImageToFileSystem(file, userid, issueid);
        if (uploadImage!=null) {
            return new ResponseEntity<>(uploadImage, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
	}

	@GetMapping("/fileSystem/{issueId}")
	public ResponseEntity<FileData> downloadImageFromFileSystem(@PathVariable("issueId") String issueId) throws IOException {
		FileData imageData = service.downloadImageFromFileSystem(issueId);

        if (imageData!=null) {
            return new ResponseEntity<>(imageData, HttpStatus.OK);
        }
        return new ResponseEntity<>(imageData,HttpStatus.NOT_FOUND);
	}
}
