package com.petAdoption.petPalFinder.services;

import java.util.ArrayList;
import java.util.List;

import com.petAdoption.petPalFinder.dto.MonthWiseRevanue;
import com.petAdoption.petPalFinder.dto.WebsiteRevenueDto;
import com.petAdoption.petPalFinder.dto.YearWiseRevenue;
import com.petAdoption.petPalFinder.models.WebsiteRevenue;

public interface WebsiteRevenueService {
    public void save(ArrayList<WebsiteRevenue> websiteRevenue);
    public List<MonthWiseRevanue> monthRevenues(Integer year);
    public List<YearWiseRevenue> yearRevenues();

}