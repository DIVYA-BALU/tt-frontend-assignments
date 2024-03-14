package com.chartexample.chart.service;

import java.util.List;

import com.chartexample.chart.model.CityCount;
import com.chartexample.chart.model.DensityByCordinates;
import com.chartexample.chart.model.RegistrationCount;
import com.chartexample.chart.model.User;

public interface UserService {
    public boolean saveUser(List<User> user);
    public boolean save(User user);
    public List<DensityByCordinates> getDenityByCordinates();
    public List<CityCount> getCityCountOfUsers();
    public List<RegistrationCount> getRegistrationCountByMonth();

}
