package com.application.Issue.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.Issue.Service.UserService;
import com.application.Issue.security.repository.UserRepository;
import com.application.Issue.security.user.User;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user")
public class UserController {

    @Autowired
    public UserService userService;

    @Autowired
    public UserRepository userRepo;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users,HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") String id){
        User user = userService.findUser(id);
        if(user!=null){
            return new ResponseEntity<>(user,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/locationUpdate/{id}/{location}")
    public ResponseEntity<User> updateLocation(@PathVariable("id") String id, @PathVariable("location") String location){
        User user = userService.findUser(id);
        if(user!=null){
            User updatedUser = userService.updateLocation(user, location);
            return new ResponseEntity<>(updatedUser,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<User> deleteUserById(@PathVariable("id") String id){
        User user = userService.findUser(id);
        if(user!=null){
            userService.removeUser(id);
            return new ResponseEntity<>(user,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
