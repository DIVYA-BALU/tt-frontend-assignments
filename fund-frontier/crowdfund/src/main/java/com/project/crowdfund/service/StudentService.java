package com.project.crowdfund.service;

import java.io.IOException;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

import com.project.crowdfund.dto.StudentDto;
import com.project.crowdfund.model.Student;

public interface StudentService {

    Student saveStudent(StudentDto student) throws IOException;

    Student getStudent(String email);

    Student updateStudent(Student student);

    Page<Student> findAll(int pageNo, int pageSize);

    Page<Student> getAllApproved(int pageNo, int pageSize);

    Student setApproved(String name, Student request);

    Student setRejected(Student student);

    Student updateProfile(MultipartFile file, String email) throws IOException;

    List<Student> searchByGroup(String group);

    List<Student> searchByYear(String year);

    List<Student> searchByCollege(String college);

    Page<Student> getAllPending(Integer pageNo, Integer pageSize);

}
