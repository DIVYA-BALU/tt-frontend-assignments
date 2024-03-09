package com.application.Issue.Service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.Issue.Model.Location;
import com.application.Issue.Repository.LocationRepository;
import com.application.Issue.Service.LocationService;

@Service
public class LocationServiceImpl implements LocationService {
    
    @Autowired
    public LocationRepository locationRepo;

    public Location addLocation(Location location) {
       return locationRepo.save(location);
    }

    public List<Location> getUserLocationList(String userId) {
        return locationRepo.findAllByUserId(userId);
    }

}
