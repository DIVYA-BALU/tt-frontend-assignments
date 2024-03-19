package com.petAdoption.petPalFinder.services.implementation;

import java.util.List;
import java.util.Date;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Service;

import com.petAdoption.petPalFinder.dao.PetPostDao;
import com.petAdoption.petPalFinder.dto.PetPostDto;
import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.models.DeletedPetPost;
import com.petAdoption.petPalFinder.models.Location;
import com.petAdoption.petPalFinder.models.PetPost;
import com.petAdoption.petPalFinder.repositorys.AdoptionDetailRepository;
import com.petAdoption.petPalFinder.repositorys.DeletedPetPostRepository;
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

    @Autowired
    DeletedPetPostRepository deletedPetPostRepository;

    @Autowired
    AdoptionDetailRepository adoptionDetailRepository;

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
                .posterId(organizationRepository.findById(petPostDto.getPosterId()).get())
                .images(url)
                .postedDate(new Date())
                .description(petPostDto.getDescription())
                .isAdopted(petPostDto.getIsAdopted())
                .build();
        return petPostRepository.save(petPost);
    }

    @Override
    public List<PetPost> getNearByPost(Location location,Integer page) {
        return petPostDao.nearByPetPost1(location,page);
    }

    @Override
    public Page<PetPost> getLatestPost(Integer page) {
        Pageable pageable = PageRequest.of(page, 8,Sort.by(Order.desc("postedDate")));
        return petPostRepository.findAll(pageable);
    }

    @Override
    public PetPost getPetPostById(String id) {
        return petPostRepository.findById(id).get();
    }

    public List<String> petBreedInput(String category, String breed) {
        return petPostDao.petBreedInput(category, breed);
    }

    public List<String> petCategoryInput(String value) {
        return petPostDao.petCategoryInput(value);
    }

    public List<PetPost> searchedPets(String category, String breed, String gender, String isInfected, String city,
            Integer page) {
        return petPostDao.searchedPets(category, breed, gender, isInfected, city, page);
    }

    @Override
    public StatusMessage deletePost(String id) {
        PetPost petPost = petPostRepository.findById(id).get();
        petPostToDeletedPost(petPost);
        adoptionDetailRepository.deleteByPetPostId(petPost);
        StatusMessage statusMessage = new StatusMessage();
        petPostRepository.deleteById(id);
        statusMessage.setMessage("success");
        return statusMessage;
    }

    void petPostToDeletedPost(PetPost petPost) {
        DeletedPetPost deletedPetPost = DeletedPetPost.builder().breed(petPost.getBreed()).category(petPost.getCategory())
                .description(petPost.getDescription()).images(petPost.getImages()).isAdopted(petPost.getIsAdopted()).isInfected(petPost.getIsInfected()).quantity(petPost.getQuantity())
                .gender(petPost.getGender()).posterId(petPost.getPosterId()).postedDate(petPost.getPostedDate()).build();
    
        deletedPetPostRepository.save(deletedPetPost);
            }
}
