package com.chartexample.chart.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chartexample.chart.dao.UserDao;
import com.chartexample.chart.model.CityCount;
import com.chartexample.chart.model.DensityByCordinates;
import com.chartexample.chart.model.RegistrationCount;
import com.chartexample.chart.model.User;
import com.chartexample.chart.repository.UserRepository;
import com.chartexample.chart.service.UserService;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserDao userDao;

    @Override
    public boolean saveUser(List<User> user) {
        System.out.println(user);
        userRepository.saveAll(user);
        return true;
    }
    @Override
    public boolean save(User user) {
        System.out.println(user.getAddress());
        userRepository.save(user);
        return true;
    }
    @Override
    public List<DensityByCordinates> getDenityByCordinates() {
        return userDao.userDensity();
    }
    @Override
    public List<CityCount> getCityCountOfUsers() {
        return userDao.getCityCountByUser();
    }
    @Override
    public List<RegistrationCount> getRegistrationCountByMonth() {
        return userDao.registrationCountMonthWise();
    }
    
}
