package com.project.storeadministration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.storeadministration.dto.AttendanceRequest;
import com.project.storeadministration.exception.CustomException;
import com.project.storeadministration.model.AttendanceDetail;
import com.project.storeadministration.service.AttendanceDetailService;

@RestController
@RequestMapping("attendance-details")
public class AttendanceDetailController {

  @Autowired
  private AttendanceDetailService attendanceDetailService;

  @PostMapping
  public ResponseEntity<Page<AttendanceDetail>> saveAttendanceDetail(@RequestBody AttendanceRequest attendanceRequest) throws CustomException{
    return new ResponseEntity<Page<AttendanceDetail>>(attendanceDetailService.saveAttendanceDetail(attendanceRequest), HttpStatus.OK);
  }
}
