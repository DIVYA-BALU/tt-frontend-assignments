package com.project.storeadministration.service;

import org.springframework.data.domain.Page;

import com.project.storeadministration.dto.AttendanceRequest;
import com.project.storeadministration.model.AttendanceDetail;

public interface AttendanceDetailService {

  Page<AttendanceDetail> saveAttendanceDetail(AttendanceRequest attendanceRequest);
  
}
