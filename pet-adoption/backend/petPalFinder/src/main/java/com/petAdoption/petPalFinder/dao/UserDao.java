package com.petAdoption.petPalFinder.dao;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.petAdoption.petPalFinder.dto.UserDto;
import com.petAdoption.petPalFinder.dto.UserListDto;
import com.petAdoption.petPalFinder.models.User;

@Repository
public class UserDao {

    @Autowired
    MongoTemplate template;

    public UserListDto getUsers(String email, String role, Integer page, Integer size) {
        UserListDto userListDto = new UserListDto();
        Criteria criteria = Criteria.where("email").regex(email);
        Query query = new Query(criteria);
        // Pageable pageable = PageRequest.of(page, size,Sort.by(Order.desc("rating")));

        // query.with(pageable);
        List<User> list = template.find(query, User.class);
        if(!role.equals("All")){
            list = list.stream().filter(val -> val.getRole().getRole().equals(role.toUpperCase())).collect(Collectors.toList());
        }

        userListDto.setUser(list.stream().skip(page * size)
                .limit(size)
                .map(val -> new UserDto(
                        val.getEmail(),
                        val.getRole().getRole(),
                        val.getProfileId()))
                .collect(Collectors.toList()));
        userListDto.setCount((long) list.size());
        return userListDto;
    }
}
