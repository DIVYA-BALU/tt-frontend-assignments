package com.project.storeadministration.service;

import java.time.LocalDate;

import org.springframework.data.domain.Page;

import com.project.storeadministration.dto.LeaveDetailRequest;
import com.project.storeadministration.exception.CustomException;
import com.project.storeadministration.model.LeaveDetail;

public interface LeaveDetailService {
  LeaveDetail saveLeaveDetail(LeaveDetailRequest leaveDetailRequest) throws CustomException;

  Page<LeaveDetail> getLeaveDetails(int pageNo, int pageSize, String branchId, String sectionId, LocalDate date);
}
