package com.project.storeadministration.service;

import java.time.LocalDate;

import org.springframework.data.domain.Page;

import com.project.storeadministration.dto.LeaveDetailRequest;
import com.project.storeadministration.exception.CustomException;
import com.project.storeadministration.model.LeaveDetail;
import com.project.storeadministration.model.User;

public interface LeaveDetailService {
  LeaveDetail saveLeaveDetail(LeaveDetailRequest leaveDetailRequest) throws CustomException;

  Page<User> getLeaveAppliedUsers(int pageNo, int pageSize, String branchId, String sectionId, LocalDate date);
}
