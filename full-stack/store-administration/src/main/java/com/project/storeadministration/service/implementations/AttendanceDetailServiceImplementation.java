package com.project.storeadministration.service.implementations;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.project.storeadministration.dto.AttendanceRequest;
import com.project.storeadministration.exception.CustomException;
import com.project.storeadministration.model.AttendanceDetail;
import com.project.storeadministration.model.LeaveDetail;
import com.project.storeadministration.repository.AttendanceDetailRepository;
import com.project.storeadministration.repository.UserRepository;
import com.project.storeadministration.service.AttendanceDetailService;

@Service
public class AttendanceDetailServiceImplementation implements AttendanceDetailService {

  @Autowired
  private AttendanceDetailRepository attendanceDetailRepository;

  @Autowired
  private UserRepository userRepository;

  @Override
  public Page<AttendanceDetail> saveAttendanceDetail(AttendanceRequest attendanceRequest) {
    if(!userRepository.existsById(attendanceRequest.getEmployeeId()))
    throw new CustomException("User Not Exists");

    // check whether the data is available with date and user id if not add the enry otherwise add the checkout
    
    // Optional<AttendanceDetail> optionalLeaveDetail = leaveDetailRepository.findByDate(leaveDetailRequest.getDate());
    // LeaveDetail leaveDetail = new LeaveDetail();
    // if(optionalLeaveDetail.isPresent())
    // {
    //   leaveDetail = optionalLeaveDetail.get();
    //   leaveDetail.getEmployees().add(userRepository.findById(leaveDetailRequest.getEmployeeId()).get());
    // }
    // else{
    //   leaveDetail.setDate(leaveDetailRequest.getDate());
    //   leaveDetail.getEmployees().add(userRepository.findById(leaveDetailRequest.getEmployeeId()).get());
    // }
    // return leaveDetailRepository.save(leaveDetail);
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'saveAttendanceDetail'");
  }
  
}
