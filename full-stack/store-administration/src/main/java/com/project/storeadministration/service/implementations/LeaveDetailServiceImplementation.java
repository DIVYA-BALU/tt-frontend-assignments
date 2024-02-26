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
import com.project.storeadministration.model.User;
import com.project.storeadministration.repository.LeaveDetailRepository;
import com.project.storeadministration.repository.UserRepository;
import com.project.storeadministration.service.LeaveDetailService;

@Service
public class LeaveDetailServiceImplementation implements LeaveDetailService {

  @Autowired
  private LeaveDetailRepository leaveDetailRepository;

  @Autowired
  private UserRepository userRepository;

  @Override
  public LeaveDetail saveLeaveDetail(LeaveDetailRequest leaveDetailRequest) throws CustomException {
    if(!userRepository.existsById(leaveDetailRequest.getEmployeeId()))
    throw new CustomException("User Not Exists");

    Optional<LeaveDetail> optionalLeaveDetail = leaveDetailRepository.findByDate(leaveDetailRequest.getDate());
    LeaveDetail leaveDetail = new LeaveDetail();
    if(optionalLeaveDetail.isPresent())
    {
      leaveDetail = optionalLeaveDetail.get();
      leaveDetail.getEmployees().add(userRepository.findById(leaveDetailRequest.getEmployeeId()).get());
    }
    else{
      leaveDetail.setDate(leaveDetailRequest.getDate());
      leaveDetail.getEmployees().add(userRepository.findById(leaveDetailRequest.getEmployeeId()).get());
    }
    return leaveDetailRepository.save(leaveDetail);
  }

  @Override
  public Page<User> getLeaveAppliedUsers(int pageNo, int pageSize, String branchId, String sectionId, LocalDate date) {
    PageRequest pageable = PageRequest.of(pageNo, pageSize);
    if(date == null && sectionId == null){
      //fetch all leave users in the given branch in all day
    }
    else if(date == null){
      //in branch in section
    }
    else{
      //in branch in that section on that date
    }
    throw new UnsupportedOperationException("Unimplemented method 'getLeaveAppliedUsers'");
  }

}
