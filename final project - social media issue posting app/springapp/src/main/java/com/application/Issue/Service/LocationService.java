package com.application.Issue.Service;

import java.util.List;

import com.application.Issue.Model.Location;

public interface LocationService {
    
    public Location addLocation(Location location);
    public List<Location> getUserLocationList(String userId);
}
