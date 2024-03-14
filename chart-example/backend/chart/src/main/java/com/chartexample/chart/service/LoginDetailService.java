package com.chartexample.chart.service;

import java.util.List;

import com.chartexample.chart.model.HourlyLoginActivity;
import com.chartexample.chart.model.LoginDetail;

public interface LoginDetailService {
    public Boolean saveAll(List<LoginDetail> loginDetails);
    public List<HourlyLoginActivity> getHourlyLoginActivities();
}
