package com.application.Issue.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.Issue.Model.Location;
import com.application.Issue.Service.LocationService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/location")
public class LocationController {
    
    @Autowired
    public LocationService locationService;

    @PostMapping("/newLocation")
    public ResponseEntity<Location> addNewLocation(@RequestBody Location location){
        Location newLocation = locationService.addLocation(location);
        return new ResponseEntity<>(newLocation,HttpStatus.OK); 
    }

    @GetMapping("/getAll/{id}")
    public ResponseEntity<List<Location>> getAllLocationsUsingUserId(@PathVariable("id") String userId){
        List<Location> locations = locationService.getUserLocationList(userId);
        return new ResponseEntity<>(locations,HttpStatus.OK);
    }
}
