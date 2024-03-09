package com.petAdoption.petPalFinder.services.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Service;

import com.petAdoption.petPalFinder.dao.VeterinaryDoctorDao;
import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.models.Rating;
import com.petAdoption.petPalFinder.repositorys.RatingRepository;
import com.petAdoption.petPalFinder.services.RatingService;

@Service
public class RatingServiceImpl implements RatingService{

    @Autowired
    RatingRepository ratingRepository;

    @Autowired
    VeterinaryDoctorDao veterinaryDoctorDao;

    @Override
    public StatusMessage addRating(Rating rating) {
        StatusMessage  statusMessage= new StatusMessage();
        veterinaryDoctorDao.updateRating(rating.getVeterinaryDoctorId(), rating.getRating());
        ratingRepository.save(rating);
        statusMessage.setMessage("success");
        return statusMessage;
    }

    @Override
    public List<Rating> getDoctor() {
        return ratingRepository.findAll(Sort.by(Order.desc("rating")));
    }
    
}
