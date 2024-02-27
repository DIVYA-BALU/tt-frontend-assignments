package com.project.storeadministration.service.implementations;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.project.storeadministration.dto.LeaveDetailRequest;
import com.project.storeadministration.exception.CustomException;
import com.project.storeadministration.model.LeaveDetail;
import com.project.storeadministration.repository.CustomLeaveDetailRepository;
import com.project.storeadministration.repository.LeaveDetailRepository;
import com.project.storeadministration.repository.UserRepository;
import com.project.storeadministration.service.LeaveDetailService;

@Service
public class LeaveDetailServiceImplementation implements LeaveDetailService {

  @Autowired
  private LeaveDetailRepository leaveDetailRepository;

  @Autowired
  private CustomLeaveDetailRepository customLeaveDetailRepository;

  @Autowired
  private UserRepository userRepository;

  @Override
  public LeaveDetail saveLeaveDetail(LeaveDetailRequest leaveDetailRequest) throws CustomException {
    if (!userRepository.existsById(leaveDetailRequest.getEmployeeId()))
      throw new CustomException("User Not Exists");

    Optional<LeaveDetail> optionalLeaveDetail = leaveDetailRepository.findByDate(leaveDetailRequest.getDate());
    LeaveDetail leaveDetail = new LeaveDetail();
    if (optionalLeaveDetail.isPresent()) {
      leaveDetail = optionalLeaveDetail.get();
      leaveDetail.getEmployees().add(userRepository.findById(leaveDetailRequest.getEmployeeId()).get());
    } else {
      leaveDetail.setDate(leaveDetailRequest.getDate());
      leaveDetail.getEmployees().add(userRepository.findById(leaveDetailRequest.getEmployeeId()).get());
    }
    return leaveDetailRepository.save(leaveDetail);
  }

  @Override
  public Page<LeaveDetail> getLeaveDetails(int pageNo, int pageSize, String branchId, String sectionId,
      LocalDate date) {
    PageRequest pageable = PageRequest.of(pageNo, pageSize);
    return customLeaveDetailRepository.getLeaveDetails(branchId, sectionId, date, pageable);
  }

}
