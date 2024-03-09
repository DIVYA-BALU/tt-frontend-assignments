package com.project.crowdfund.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.crowdfund.dto.FunderDto;
import com.project.crowdfund.model.Funder;
import com.project.crowdfund.service.FunderService;
import com.project.crowdfund.service.serviceimp.JwtService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/funder")
public class FunderController {

    private final FunderService funderService;
    private final JwtService jwtService;

    @PostMapping("/save")
    public ResponseEntity<Funder> saveFunder(@RequestBody FunderDto funder) {
        return ResponseEntity.ok(funderService.saveFunder(funder));
    }

    @GetMapping("/get/{email}")
    public ResponseEntity<Funder> getFunder(@PathVariable String email) {
        return ResponseEntity.ok(funderService.getFunder(email));
    }

    @GetMapping("/findall")
    public ResponseEntity<Page<Funder>> findAll(@RequestParam(defaultValue = "0") Integer pageNo,
            @RequestParam(defaultValue = "10") Integer pageSize) {
        return ResponseEntity.ok(funderService.findAll(pageNo, pageSize));
    }

    @PatchMapping("/update")
    public ResponseEntity<Funder> updateFunder(@RequestBody FunderDto funder) {
        return ResponseEntity.ok(funderService.updateFunder(funder));
    }

    @GetMapping("/getfunder")
    public ResponseEntity<Funder> getUserByemail(HttpServletRequest request) {
        String authorizationHeader = request.getHeader("Authorization");
        String jwt = authorizationHeader.substring(7);
        String userEmail = jwtService.extractUserName(jwt);
        return ResponseEntity.ok(funderService.getFunderByEmail(userEmail));
    }
}
