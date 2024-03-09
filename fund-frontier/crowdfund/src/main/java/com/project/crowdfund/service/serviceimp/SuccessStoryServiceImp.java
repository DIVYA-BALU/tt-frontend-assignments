package com.project.crowdfund.service.serviceimp;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.project.crowdfund.Repository.SuccessStoryRepository;
import com.project.crowdfund.model.SuccessStory;
import com.project.crowdfund.service.SuccessStoryService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SuccessStoryServiceImp implements SuccessStoryService {

    private final SuccessStoryRepository successStoryRepository;

    @Override
    public SuccessStory saveSuccessStory(SuccessStory successStory) {
        return successStoryRepository.save(successStory);
    }

    @Override
    public Page<SuccessStory> getAllSuccessStory(Integer pageNo, Integer pageSize) {
        PageRequest pageRequest = PageRequest.of(pageNo, pageSize);
        Page<SuccessStory> story = successStoryRepository.findAll(pageRequest);
        return story;
    }

    @Override
    public SuccessStory updateSuccessStory(SuccessStory successStory) {
        return successStoryRepository.save(successStory);
    }

}
