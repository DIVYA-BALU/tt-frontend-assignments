package com.petAdoption.petPalFinder.services.implementation;

import java.util.List;
import java.util.Date;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petAdoption.petPalFinder.dao.PetPostDao;
import com.petAdoption.petPalFinder.dto.PetPostDto;
import com.petAdoption.petPalFinder.models.Location;
import com.petAdoption.petPalFinder.models.PetPost;
import com.petAdoption.petPalFinder.repositorys.OrganizationRepository;
import com.petAdoption.petPalFinder.repositorys.PetPostRepository;
import com.petAdoption.petPalFinder.services.FileService;
import com.petAdoption.petPalFinder.services.PetPostService;

@Service
public class PetPostServiceImpl implements PetPostService {

    @Autowired
    PetPostRepository petPostRepository;

    @Autowired
    FileService fileService;

    @Autowired
    PetPostDao petPostDao;

    @Autowired
    OrganizationRepository organizationRepository;

    @Override
    public List<PetPost> getPostByPoster(String posterId) {
        return petPostRepository.findByPosterId(new ObjectId(posterId));
    }

    @Override
    public PetPost savePost(PetPostDto petPostDto) {
        String url = fileService.saveFile(petPostDto.getImage(), "pet");
        PetPost petPost = PetPost.builder()
        .category(petPostDto.getCategory())
        .breed(petPostDto.getBreed())
        .quantity(petPostDto.getQuantity())
        .gender(petPostDto.getGender())
        .weight(petPostDto.getWeight())
        .isInfected(petPostDto.getIsInfected())
        .posterId(organizationRepository.findById(petPostDto.getPosterId()).get() )
        .images(url)
        .postedDate(new Date())
        .description(petPostDto.getDescription())
        .isAdopted(petPostDto.getIsAdopted())
        .build();
        return petPostRepository.save(petPost);
    }

    @Override
    public List<PetPost> getNearByPost(Location location) {
        return petPostDao.nearByPetPost(location);
    }

    @Override
    public List<PetPost> getLatestPost() {
        return petPostRepository.findAll();
    }

    @Override
    public PetPost getPetPostById(String id) {
        return petPostRepository.findById(id).get();
    }

}
