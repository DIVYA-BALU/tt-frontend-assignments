package com.project.crowdfund.service;

import org.springframework.data.domain.Page;

import com.project.crowdfund.model.SuccessStory;

public interface SuccessStoryService {

    SuccessStory saveSuccessStory(SuccessStory successStory);

    Page<SuccessStory> getAllSuccessStory(Integer pageNo, Integer pageSize);

    SuccessStory updateSuccessStory(SuccessStory successStory);

}
