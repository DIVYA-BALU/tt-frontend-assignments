package com.project.crowdfund.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.project.crowdfund.dto.StudentDto;
import com.project.crowdfund.model.Student;
import com.project.crowdfund.service.StudentService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/student")
public class StudentController {
    private final StudentService studentService;

    @PostMapping("/save")
    public ResponseEntity<Student> saveStudent(@ModelAttribute StudentDto student) throws IOException{
        System.out.println(student.getProfilePhoto());
        return ResponseEntity.ok(studentService.saveStudent(student));
    }

    @GetMapping("/get/{email}")
    public ResponseEntity<Student> getStudent(@PathVariable String email){
        return ResponseEntity.ok(studentService.getStudent(email));
    }

    @PatchMapping("/update")
    public ResponseEntity<Student> updateStudent(@RequestBody Student student){
        return ResponseEntity.ok(studentService.updateStudent(student));
    }

    @GetMapping("/findall")
    public ResponseEntity<List<Student>> findAll(@RequestParam(defaultValue = "0") Integer pageNo,
    @RequestParam(defaultValue = "10") Integer pageSize){
        return ResponseEntity.ok(studentService.findAll(pageNo,pageSize));
    }

    @GetMapping("/getallapproved")
    public ResponseEntity<List<Student>> getAllApproved(@RequestParam(defaultValue = "0") Integer pageNo,
    @RequestParam(defaultValue = "10") Integer pageSize){
        System.out.println("called");
        return ResponseEntity.ok(studentService.getAllApproved(pageNo, pageSize));
    }

    @PatchMapping("/approved/{name}/{email}")
    public ResponseEntity<String> setApproved(@PathVariable String name, @PathVariable String email) {
        return ResponseEntity.ok(studentService.setApproved(name, email));
    }

    @PatchMapping("/rejected")
    public ResponseEntity<String> setRejected(@RequestBody StudentDto student) {
        return ResponseEntity.ok(studentService.setRejected(student));
    }

    @PatchMapping("/updateProfile")
    public ResponseEntity<String> updateProfile(@RequestParam MultipartFile file, @RequestParam String email) throws IOException{
        return ResponseEntity.ok(studentService.updateProfile(file,email));
    }

    @GetMapping("/searchbygroup/{group}")
    public ResponseEntity<List<Student>> searchByGroup(@PathVariable String group) {
        return ResponseEntity.ok(studentService.searchByGroup(group));
    }

    @GetMapping("/searchbyyear/{year}")
    public ResponseEntity<List<Student>> searchByYear(@PathVariable String year) {
        return ResponseEntity.ok(studentService.searchByYear(year));
    }

    @GetMapping("/searchbycollege/{college}")
    public ResponseEntity<List<Student>> searchByCollege(@PathVariable String college) {
        return ResponseEntity.ok(studentService.searchByCollege(college));
    }

}
