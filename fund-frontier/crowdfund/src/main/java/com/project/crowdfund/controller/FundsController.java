package com.project.crowdfund.controller;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.crowdfund.model.Funds;
import com.project.crowdfund.service.FundsService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/funds")
public class FundsController {

    private final FundsService fundsService;

    @PostMapping("/save")
    public ResponseEntity<Funds> saveFunds(@RequestBody Funds funds) {
        return ResponseEntity.ok(fundsService.saveFunds(funds));
    }

    @GetMapping("/getall")
    public ResponseEntity<Page<Funds>> getAllFunds(@RequestParam(defaultValue = "0") Integer pageNo,
            @RequestParam(defaultValue = "10") Integer pageSize) {
        return ResponseEntity.ok(fundsService.getAllFunds(pageNo, pageSize));
    }

    @GetMapping("/findFunder/{email}")
    public ResponseEntity<List<Funds>> getStudents(@PathVariable String email) {
        return ResponseEntity.ok(fundsService.getStudentsByFunder(email));
    }

}
