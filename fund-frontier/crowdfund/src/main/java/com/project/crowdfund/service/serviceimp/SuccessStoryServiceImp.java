package com.project.crowdfund.service.serviceimp;

import java.util.List;

import org.springframework.stereotype.Service;

import com.project.crowdfund.Repository.SuccessStoryRepository;
import com.project.crowdfund.model.SuccessStory;
import com.project.crowdfund.service.SuccessStoryService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SuccessStoryServiceImp implements SuccessStoryService{

    private final  SuccessStoryRepository successStoryRepository;
    
    @Override
    public SuccessStory saveSuccessStory(SuccessStory successStory) {
        return successStoryRepository.save(successStory);
    }

    @Override
    public List<SuccessStory> getAllSuccessStory() {
        return successStoryRepository.findAll();
    }

    @Override
    public SuccessStory updateSuccessStory(SuccessStory successStory) {
        return successStoryRepository.save(successStory);
    }
    
}
