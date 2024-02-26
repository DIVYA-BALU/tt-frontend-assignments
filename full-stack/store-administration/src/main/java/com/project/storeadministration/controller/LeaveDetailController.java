package com.project.storeadministration.controller;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.storeadministration.dto.LeaveDetailRequest;
import com.project.storeadministration.exception.CustomException;
import com.project.storeadministration.model.LeaveDetail;
import com.project.storeadministration.model.User;
import com.project.storeadministration.service.LeaveDetailService;

@RestController
@RequestMapping("leave-details") 
public class LeaveDetailController {
  
  @Autowired
  private LeaveDetailService leaveDetailService;

  @PostMapping
  public ResponseEntity<LeaveDetail> saveLeaveDetail(@RequestBody LeaveDetailRequest leaveDetail) throws CustomException{
    return new ResponseEntity<LeaveDetail>(leaveDetailService.saveLeaveDetail(leaveDetail), HttpStatus.OK);
  }

  @GetMapping
  public ResponseEntity<Page<User>> getLeaveAppliedUsers(@RequestParam(defaultValue = "0") int pageNo,
  @RequestParam(defaultValue = "10") int pageSize, @RequestParam String branchId, @RequestParam(required = false) String sectionId, @RequestParam(required = false) LocalDate date) throws CustomException{
    return new ResponseEntity<Page<User>>(leaveDetailService.getLeaveAppliedUsers(pageNo, pageSize, branchId, sectionId, date), HttpStatus.OK);
  }

}
