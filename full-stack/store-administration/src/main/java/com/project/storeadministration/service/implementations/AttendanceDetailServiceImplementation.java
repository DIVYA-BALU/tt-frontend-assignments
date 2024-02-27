package com.project.storeadministration.service.implementations;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.project.storeadministration.dto.AttendanceRequest;
import com.project.storeadministration.exception.CustomException;
import com.project.storeadministration.model.AttendanceDetail;
import com.project.storeadministration.repository.AttendanceDetailRepository;
import com.project.storeadministration.repository.CustomAttendanceDetailRepository;
import com.project.storeadministration.repository.UserRepository;
import com.project.storeadministration.service.AttendanceDetailService;

@Service
public class AttendanceDetailServiceImplementation implements AttendanceDetailService {

  @Autowired
  private AttendanceDetailRepository attendanceDetailRepository;

  @Autowired
  private CustomAttendanceDetailRepository customAttendanceDetailRepository;

  @Autowired
  private UserRepository userRepository;

  @Override
  public AttendanceDetail saveAttendanceDetail(AttendanceRequest attendanceRequest) throws CustomException {
    if (!userRepository.existsById(attendanceRequest.getUserId()))
      throw new CustomException("User Not Exists");

    AttendanceDetail attendanceDetail = customAttendanceDetailRepository.findByUserIdAndDate(
        attendanceRequest.getUserId(),
        LocalDate.now());
    if (attendanceDetail != null) {
      attendanceDetail.setCheckOutTime(attendanceRequest.getCheckOutTime());
    } else {
      attendanceDetail = new AttendanceDetail();
      attendanceDetail.setDate(LocalDate.now());
      attendanceDetail.setEmployee(userRepository.findById(attendanceRequest.getUserId()).get());
    }
    return attendanceDetailRepository.save(attendanceDetail);
  }

  @Override
  public Page<AttendanceDetail> getAttendanceDetails(int pageNo, int pageSize, String branchId, String sectionId,
      LocalDate date) {
    Pageable pageable = PageRequest.of(pageNo, pageSize);
    return customAttendanceDetailRepository.getAttendanceDetails(branchId, sectionId, date, pageable);
  }

}
