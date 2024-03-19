package com.petAdoption.petPalFinder.services.implementation;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petAdoption.petPalFinder.dao.WebsiteRevenueDao;
import com.petAdoption.petPalFinder.dto.MonthWiseRevanue;
import com.petAdoption.petPalFinder.dto.WebsiteRevenueDto;
import com.petAdoption.petPalFinder.dto.YearWiseRevenue;
import com.petAdoption.petPalFinder.models.WebsiteRevenue;
import com.petAdoption.petPalFinder.repositorys.WebsiteRevenueRepository;
import com.petAdoption.petPalFinder.services.WebsiteRevenueService;

@Service
public class WebsiteRevenueServiceImpl implements WebsiteRevenueService{

    @Autowired
    WebsiteRevenueRepository websiteRevenueRepository;

    @Autowired
    WebsiteRevenueDao websiteRevenueDao;

    @Override
    public void save(ArrayList<WebsiteRevenue> websiteRevenue) {
        websiteRevenueRepository.saveAll(websiteRevenue);
    }

  
    @Override
    public List<MonthWiseRevanue> monthRevenues(Integer year) {
        return websiteRevenueDao.monthRevenue(year);
    }


    @Override
    public List<YearWiseRevenue> yearRevenues() {
        return websiteRevenueDao.yearRevenue();
    }
    
}
