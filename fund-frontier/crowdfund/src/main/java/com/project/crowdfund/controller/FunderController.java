package com.project.crowdfund.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.crowdfund.dto.FunderDto;
import com.project.crowdfund.model.Funder;
import com.project.crowdfund.service.FunderService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/funder")
public class FunderController {
    
    private final FunderService funderService;
    
    @PostMapping("/save")
    public ResponseEntity<Funder> saveFunder(@RequestBody FunderDto funder){
        return ResponseEntity.ok(funderService.saveFunder(funder));
    }

    @GetMapping("/get/{email}")
    public ResponseEntity<Funder> getFunder(@PathVariable String email){
        return ResponseEntity.ok(funderService.getFunder(email));
    }

    @GetMapping("/findall")
    public ResponseEntity<List<Funder>> findAll(){
        return ResponseEntity.ok(funderService.findAll());
    }

    @PatchMapping("/update")
    public ResponseEntity<Funder> updateFunder(@RequestBody FunderDto funder){
        return ResponseEntity.ok(funderService.updateFunder(funder));
    }

}
