package com.project.crowdfund.service;

import java.util.List;

import com.project.crowdfund.model.SuccessStory;

public interface SuccessStoryService {

    SuccessStory saveSuccessStory(SuccessStory successStory);

    List<SuccessStory> getAllSuccessStory();

    SuccessStory updateSuccessStory(SuccessStory successStory);
    
}
