package com.project.crowdfund.service.serviceimp;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.project.crowdfund.Repository.StudentRepository;
import com.project.crowdfund.Repository.UserRepository;
import com.project.crowdfund.dto.StudentDto;
import com.project.crowdfund.model.Student;
import com.project.crowdfund.model.Users;
import com.project.crowdfund.service.StudentFundsService;
import com.project.crowdfund.service.StudentService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StudentServiceImp implements StudentService {

    private final StudentRepository studentRepository;
    private final JavaMailSender javaMailSender;
    private final UserRepository userRepository;
    private final StudentFundsService studentFundsService;

    @Value("${images.folder.path}")
    private String uploads;

    @Value("${upload.path}")
    private String path;

    @Value("${spring.mail.username}")
    private String sender;

    @Override
    public Student saveStudent(StudentDto student) throws IOException {

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSSX");
        LocalDateTime localDateTime1 = LocalDateTime.parse(student.getDateOfBirth(), formatter);
        LocalDateTime localDateTime2 = LocalDateTime.parse(student.getEndDate(), formatter);

        String profile = student.getProfilePhoto().getOriginalFilename();
        String aadhar = student.getAadharCardProof().getOriginalFilename();
        String income = student.getIncomeProof().getOriginalFilename();
        String studentId = student.getStudentIdentityProof().getOriginalFilename();
        String fees = student.getFeeDetails().getOriginalFilename();

        String profilefpath = path + profile;
        String aadharfpath = path + aadhar;
        String incomefpath = path + income;
        String studentidfpath = path + studentId;
        String feesfpath = path + fees;

        String profilePath = uploads + profile;
        String aadharPath = uploads + aadhar;
        String incomePath = uploads + income;
        String studentIdPath = uploads + studentId;
        String feesPath = uploads + fees;

        Users user = userRepository.findByEmail(student.getEmail()).get();
        System.out.println(user.getEmail());

        Student std = Student.builder()
                .profilePhoto(profilefpath)
                .firstName(student.getFirstName())
                .lastName(student.getLastName())
                .email(user)
                .phoneNumber(student.getPhoneNumber())
                .gender(student.getGender())
                .countryOfBirth(student.getCountryOfBirth())
                .countryOfResidence(student.getCountryOfResidence())
                .dateOfBirth(localDateTime1)
                .address(student.getAddress())
                .city(student.getCity())
                .state(student.getState())
                .zipCode(student.getZipCode())
                .school(student.getSchool())
                .aadharCardProof(aadharfpath)
                .incomeProof(incomefpath)
                .collegeName(student.getCollegeName())
                .yearOfStudy(student.getYearOfStudy())
                .course(student.getCourse())
                .studentIdentityProof(studentidfpath)
                .studentId(student.getStudentId())
                .fundRequired(student.getFundRequired())
                .feeDetails(feesfpath)
                .endDate(localDateTime2)
                .shortStory(student.getShortStory())
                .status("Pending")
                .build();

        Student savedStudent = studentRepository.save(std);

        Files.copy(student.getProfilePhoto().getInputStream(), Paths.get(profilePath));
        Files.copy(student.getAadharCardProof().getInputStream(), Paths.get(aadharPath));
        Files.copy(student.getIncomeProof().getInputStream(), Paths.get(incomePath));
        Files.copy(student.getStudentIdentityProof().getInputStream(), Paths.get(studentIdPath));
        Files.copy(student.getFeeDetails().getInputStream(), Paths.get(feesPath));

        sendMail(student.getEmail(), savedStudent.getFirstName() + " " + savedStudent.getLastName());

        return savedStudent;

    }

    @Override
    public Student getStudent(String email) {
        Optional<Users> user = userRepository.findByEmail(email);
        return studentRepository.findByEmail(user.get());
    }

    @Override
    public Student updateStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public Page<Student> findAll(int pageNo, int pageSize) {
        PageRequest pageRequest = PageRequest.of(pageNo, pageSize);
        Page<Student> pagingStudent = studentRepository.findAll(pageRequest);
        return pagingStudent;
    }

    @Override
    public Page<Student> getAllApproved(int pageNo, int pageSize) {
        PageRequest pageRequest = PageRequest.of(pageNo, pageSize);
        Page<Student> pagingStudent = studentRepository.findByStatus("Approved", pageRequest);
        return pagingStudent;
    }

    @Override
    public Page<Student> getAllPending(Integer pageNo, Integer pageSize) {
        PageRequest pageRequest = PageRequest.of(pageNo, pageSize);
        Page<Student> pagingStudent = studentRepository.findByStatus("Pending", pageRequest);
        return pagingStudent;
    }

    private String sendMail(String email, String name) {
        try {
            SimpleMailMessage mailMessage = new SimpleMailMessage();

            String mailText = "Dear " + name + ",\n" + //
                    "\n" + //
                    "Thank you for submitting your application to FundFrontier. We have received your request, and it is currently under review.\n"
                    + //
                    "\n" + //
                    "We want to assure you that our team is diligently working on processing your application.\n" + //
                    "\n" + //
                    "What's Next:\n" + //
                    "\n" + //
                    "Patience is Appreciated: The review process may take some time as we carefully evaluate each application. We appreciate your patience during this period.\n"
                    + //
                    "\n" + //
                    "Stay Connected: We will notify you via email as soon as a decision has been made regarding your application. In the meantime, if you have any questions or need further information, feel free to reach out to us at contact@fundfrontier.com.\n"
                    + //
                    "\n" + //
                    "We understand that waiting can be challenging, but please know that we are committed to providing a thorough and thoughtful review of your application.\n"
                    + //
                    "\n" + //
                    "Thank you for choosing FundFrontier. We look forward to the possibility of having you as part of our program.\n"
                    + //
                    "\n" + //
                    "Best regards,\n" + //
                    "\n" + //
                    "FundFrontier Admissions Team";
            mailMessage.setFrom(sender);
            mailMessage.setTo(email);
            mailMessage.setText(mailText);
            mailMessage.setSubject("Your Request is Under Review - Thank You for Applying!");

            javaMailSender.send(mailMessage);
            return "Mail Sent Successfully...";
        } catch (Exception e) {
            return "Error while Sending Mail";
        }
    }

    @Override
    public Student setApproved(String name, Student request) {
        System.out.println(request);
        Student student = studentRepository.findByEmail(request.getEmail());
        student.setStatus("Approved");
        studentFundsService.saveAmount(student);
        studentRepository.save(student);
        try {
            SimpleMailMessage mailMessage = new SimpleMailMessage();

            String mailText = "Dear " + name + ",\n" + //
                    "\n" + //
                    "We are thrilled to inform you that your application to FundFrontier has been accepted! Welcome to the FundFrontier community.\n"
                    + //
                    "\n" + //
                    "Your journey with us begins now. Whether you are raising funds for a project or supporting others, we're here to support and empower your crowdfunding experience.\n"
                    + //
                    "\n" + //
                    "If you have any questions or need assistance, please feel free to reach out to our support team at [support@fundfrontier.com].\n"
                    + //
                    "\n" + //
                    "Congratulations once again, and thank you for being a part of FundFrontier!\n" + //
                    "\n" + //
                    "Best regards,\n" + //
                    "\n" + //
                    "The FundFrontier Team";

            mailMessage.setFrom(sender);
            mailMessage.setTo(request.getEmail().getEmail());
            mailMessage.setText(mailText);
            mailMessage.setSubject("Congratulations! Your Application Has Been Accepted");

            javaMailSender.send(mailMessage);
            return student;
        } catch (Exception e) {
            return student;
        }
    }

    public Student setRejected(Student student) {

        student.setStatus("Rejected");
        studentRepository.save(student);

        try {
            SimpleMailMessage mailMessage = new SimpleMailMessage();

            String mailText = "Dear " + student.getFirstName() + " " + student.getLastName() + ",\n" + //
                    "\n" + //
                    "We regret to inform you that your application to FundFrontier has been carefully reviewed, and unfortunately, it has not been accepted at this time.\n"
                    + //
                    "\n" + //
                    "We appreciate your interest in FundFrontier and value the effort you put into your application. Our team had to make tough decisions, and unfortunately, we are unable to proceed with your application at this time.\n"
                    + //
                    "\n" + //
                    "If you have any specific feedback or questions about the decision, please don't hesitate to reach out to our support team at [support@fundfrontier.com].\n"
                    + //
                    "\n" + //
                    "Thank you for considering FundFrontier, and we wish you success in your future endeavors.\n" + //
                    "\n" + //
                    "Best regards,\n" + //
                    "The FundFrontier Team";

            mailMessage.setFrom(sender);
            mailMessage.setTo(student.getEmail().getEmail());
            mailMessage.setText(mailText);
            mailMessage.setSubject("Notification Regarding Your FundFrontier Application");

            javaMailSender.send(mailMessage);
            return student;
        } catch (Exception e) {
            return student;
        }
    }

    @Override
    public Student updateProfile(MultipartFile file, String email) throws IOException {

        Users user = userRepository.findByEmail(email).get();
        Student student = studentRepository.findByEmail(user);

        String profile = file.getOriginalFilename();
        String profilePath = uploads + profile;
        String profilefpath = path + profile;
        student.setProfilePhoto(profilefpath);
        studentRepository.save(student);
        Files.copy(file.getInputStream(), Paths.get(profilePath), StandardCopyOption.REPLACE_EXISTING);
        

        return student;

    }

    @Override
    public List<Student> searchByGroup(String group) {
        return studentRepository.findByCourse(group);
    }

    @Override
    public List<Student> searchByYear(String year) {
        return studentRepository.findByYearOfStudy(year);
    }

    @Override
    public List<Student> searchByCollege(String college) {
        return studentRepository.findByCollegeName(college);
    }

}
