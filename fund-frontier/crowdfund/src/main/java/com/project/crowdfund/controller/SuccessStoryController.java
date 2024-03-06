package com.project.crowdfund.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.crowdfund.model.SuccessStory;
import com.project.crowdfund.service.SuccessStoryService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor

@RequestMapping("/successstory")

public class SuccessStoryController {
    
    private final SuccessStoryService successStoryService;

    @PostMapping("/save")
    public ResponseEntity<SuccessStory> saveSuccessStory(@RequestBody SuccessStory successStory){
        return ResponseEntity.ok(successStoryService.saveSuccessStory(successStory));
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getall")
    public ResponseEntity<List<SuccessStory>> getAllSuccessStory(){
        return ResponseEntity.ok(successStoryService.getAllSuccessStory());
    }

    @PatchMapping("/update")
    public ResponseEntity<SuccessStory> updateSuccessStory(@RequestBody SuccessStory successStory){
        return ResponseEntity.ok(successStoryService.updateSuccessStory(successStory));
    }


}
