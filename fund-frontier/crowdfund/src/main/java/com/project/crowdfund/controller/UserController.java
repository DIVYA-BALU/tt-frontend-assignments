package com.project.crowdfund.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.crowdfund.model.Role;
import com.project.crowdfund.model.Users;
import com.project.crowdfund.service.UserService;
import com.project.crowdfund.service.serviceimp.JwtService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;
    private final JwtService jwtService;

    // @PreAuthorize("hasRole('ADMIN')")
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/all")
    public ResponseEntity<Page<Users>> getAllUsers(@RequestParam(defaultValue = "0") Integer pageNo,
            @RequestParam(defaultValue = "10") Integer pageSize) {
        return ResponseEntity.ok(userService.getAllUsers(pageNo, pageSize));
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Users> getUser(@PathVariable String id) {
        return ResponseEntity.ok(userService.getUser(id));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getuser")
    public ResponseEntity<Users> getUserByemail(HttpServletRequest request) {
        String authorizationHeader = request.getHeader("Authorization");
        String jwt = authorizationHeader.substring(7);
        String userEmail = jwtService.extractUserName(jwt);
        return ResponseEntity.ok(userService.getUserByEmail(userEmail));
    }

    @GetMapping("/getrole/{email}")
    public ResponseEntity<Role> getRole(@PathVariable String email) {
        return ResponseEntity.ok(userService.getUserRole(email));
    }

    @PatchMapping("/update")
    public ResponseEntity<Users> updateUser(@RequestBody Users request) {
        return ResponseEntity.ok(userService.updateUser(request));
    }

}
