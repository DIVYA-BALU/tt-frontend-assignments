package com.fullstack.newsplatform.service.impl;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fullstack.newsplatform.dto.UserNewsDTO;
import com.fullstack.newsplatform.model.EmailDetails;
import com.fullstack.newsplatform.model.UserNews;
import com.fullstack.newsplatform.repository.UserNewsRepository;
import com.fullstack.newsplatform.service.EmailService;
import com.fullstack.newsplatform.service.UserNewsService;

@Service
public class UserNewsServiceImpl implements UserNewsService {

	@Autowired
	UserNewsRepository repository;

	@Autowired
	EmailService service2;
	
	@Value("${upload.folder}")
	String upload;

	@Override
	public String addMyNews(UserNewsDTO userNews) throws IOException{
		
		List<String> images = new ArrayList<>();

		for (MultipartFile file : userNews.getImages()) {

			String s = file.getOriginalFilename();

			String fileName = upload + File.separator + s;
			
			String urlName = "http://localhost:8080/static/uploads/" + s;

			Files.copy(file.getInputStream(), Paths.get(fileName));

			images.add(urlName);

		}

		UserNews userNews2 = UserNews.builder().name(userNews.getName()).email(userNews.getEmail())
				.phoneNo(userNews.getPhoneNo()).images(images).content(userNews.getContent())
				.date(LocalDate.now()).status("PENDING").build();

		repository.save(userNews2);

		EmailDetails emailDetails = EmailDetails.builder().recipient(userNews.getEmail())
				.subject("Thank You for Your News Submission")
				.msgBody("Dear " + userNews.getName() + ",\n\n"
						+ "We sincerely appreciate your contribution to INSIGHTNOW. Your news submission is invaluable to us, and we are grateful for your efforts in keeping us informed.\n\n"
						+ "Our editorial team will review the information promptly. Should we require any additional details or if your submission is selected for publication, we will be in touch.\n\n"
						+ "Thank you once again for choosing InsigntNow as your news platform. We look forward to continuing to work together.\n\n"
						+ "Best Regards,\nInsigntNow")
				.build();

		service2.sendSimpleMail(emailDetails);

		return "Successfully Saved";
	}

	@Override
	public Page<UserNews> getUserNews(Pageable pageable) {
		return repository.findByStatus("ACCEPTED", pageable);
	}

	@Override
	public UserNews getUserNewsById(String id) {
		return repository.findById(id).get();
	}

	@Override
	public String updateRejectStatus(String id, String reason) {
		UserNews userNews = getUserNewsById(id);
		userNews.setStatus("REJECTED");
		userNews.setReason(reason);
		repository.save(userNews);
		return "DONE";
	}

	@Override
	public String updateAcceptStatus(String id) {
		UserNews userNews = getUserNewsById(id);
		userNews.setStatus("ACCEPTED");
		repository.save(userNews);
		return "DONE";
	}

	@Override
	public Page<UserNews> getUserNewsPendings(Pageable pageable) {
		return repository.findByStatus("PENDING", pageable);
	}

}
