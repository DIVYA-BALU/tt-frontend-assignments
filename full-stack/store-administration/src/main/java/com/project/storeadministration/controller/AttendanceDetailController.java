package com.project.storeadministration.controller;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.storeadministration.dto.AttendanceRequest;
import com.project.storeadministration.exception.CustomException;
import com.project.storeadministration.model.AttendanceDetail;
import com.project.storeadministration.service.AttendanceDetailService;

@RestController
@CrossOrigin("*")
@RequestMapping("attendance-details")
public class AttendanceDetailController {

  @Autowired
  private AttendanceDetailService attendanceDetailService;

  @PostMapping
  public ResponseEntity<AttendanceDetail> saveAttendanceDetail(@RequestBody AttendanceRequest attendanceRequest) throws CustomException{
    return new ResponseEntity<AttendanceDetail>(attendanceDetailService.saveAttendanceDetail(attendanceRequest), HttpStatus.OK);
  }

  @GetMapping
  public ResponseEntity<Page<AttendanceDetail>> gettAttendanceDetails(@RequestParam(defaultValue = "0") int pageNo,
  @RequestParam(defaultValue = "10") int pageSize, @RequestParam String branchId, @RequestParam(required = false) String sectionId, @RequestParam(required = true) LocalDate date) throws CustomException{
    return new ResponseEntity<Page<AttendanceDetail>>(attendanceDetailService.getAttendanceDetails(pageNo, pageSize, branchId, sectionId, date), HttpStatus.OK);
  }
}
