package com.chartexample.chart.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chartexample.chart.dao.LoginDetailDao;
import com.chartexample.chart.model.HourlyLoginActivity;
import com.chartexample.chart.model.LoginDetail;
import com.chartexample.chart.repository.LoginDetailRepository;
import com.chartexample.chart.service.LoginDetailService;

@Service
public class LoginDetailServiceImpl implements LoginDetailService{

    @Autowired
    LoginDetailRepository loginDetailRepository;

    @Autowired
    LoginDetailDao loginDetailDao;

    @Override
    public Boolean saveAll(List<LoginDetail> loginDetails) {
        loginDetailRepository.saveAll(loginDetails);
        return true;
    }

    @Override
    public List<HourlyLoginActivity> getHourlyLoginActivities() {
        return loginDetailDao.getHourlyLoginActivities();
    }
    
}
