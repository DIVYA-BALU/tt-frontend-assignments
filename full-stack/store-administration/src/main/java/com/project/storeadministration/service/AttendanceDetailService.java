package com.project.storeadministration.service;

import java.time.LocalDate;

import org.springframework.data.domain.Page;

import com.project.storeadministration.dto.AttendanceRequest;
import com.project.storeadministration.exception.CustomException;
import com.project.storeadministration.model.AttendanceDetail;

public interface AttendanceDetailService {

  AttendanceDetail saveAttendanceDetail(AttendanceRequest attendanceRequest) throws CustomException;

  Page<AttendanceDetail> getAttendanceDetails(int pageNo, int pageSize, String branchId, String sectionId,
      LocalDate date);

}
