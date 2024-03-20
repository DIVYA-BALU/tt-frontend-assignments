package com.fullstack.newsplatform.service.impl;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fullstack.newsplatform.dao.DaoInterface;
import com.fullstack.newsplatform.dto.NewsDTO;
import com.fullstack.newsplatform.model.Category;
import com.fullstack.newsplatform.model.EmailDetails;
import com.fullstack.newsplatform.model.News;
import com.fullstack.newsplatform.model.Role;
import com.fullstack.newsplatform.model.Status;
import com.fullstack.newsplatform.model.User;
import com.fullstack.newsplatform.repository.CategoryRepository;
import com.fullstack.newsplatform.repository.NewsRepository;
import com.fullstack.newsplatform.repository.RoleRepository;
import com.fullstack.newsplatform.repository.UserRepository;
import com.fullstack.newsplatform.service.EmailService;
import com.fullstack.newsplatform.service.NewsService;

@Service
public class NewsServiceImpl implements NewsService{
	
	@Autowired
	NewsRepository repository;
	
	@Value("${upload.folder}")
	String upload;
	
	@Autowired
	DaoInterface dao;
	
	@Autowired
	CategoryRepository repo;
	
	@Autowired
	UserRepository repository3;

	@Autowired
	RoleRepository repository2;
	
	@Autowired
	EmailService service2;

	@Override
	public String addNews(NewsDTO news) throws IOException{
		
		List<String> images = new ArrayList<>();

		for (MultipartFile file : news.getImages()) {

			String s = file.getOriginalFilename();

			String fileName = upload + File.separator + s;
			
			String urlName = "http://localhost:8080/static/uploads/" + s;

			Files.copy(file.getInputStream(), Paths.get(fileName));

			images.add(urlName);

		}
		
		LocalDate today = LocalDate.now();
        ZonedDateTime zonedDateTime = today.atStartOfDay(ZoneId.of("UTC"));
        Date utcDate = Date.from(zonedDateTime.toInstant());
        
        Category category = repo.findAllByCategoryName(news.getCategory());
		
		News news2 = News.builder().newsUid(news.getNewsUid()).title(news.getTitle()).synopsis(news.getSynopsis()).images(images)
				.content(news.getContent()).category(category).date(utcDate).views(0)
				.reason("").status(Status.PENDING).build();
		repository.save(news2);
		
		Role role = repository2.findByroleName("ADMIN");

		List<User> users = repository3.findByRole(role);

		for (User user : users) {
			EmailDetails emailDetails2 = EmailDetails.builder().recipient(user.getEmail())
					.subject("News Submission")
					.msgBody("Dear Editor" + ",\n\n"
							+ "We would like to inform you that there is a new approval awaiting your review.\n\n"
							+ "Kindly take a moment to assess the request and proceed with the necessary action.\n\n"
							+ "Thank you for your attention to this matter.\n\n" + "Sincerely,\nInsigntNow")
					.build();

			service2.sendSimpleMail(emailDetails2);
		}
		
		return "Successfully Added";
	}

	@Override
	public String editNews(News news) {
		Optional<News> news2 = repository.findById(news.getId());

		News news3 = News.builder().title(news.getTitle()).images(news.getImages())
				.content(news.getContent()).category(news.getCategory()).date(news2.get().getDate())
				.views(news2.get().getViews()).reason(news2.get().getReason())
				.status(news2.get().getStatus()).build();

		repository.save(news3);
		return "Successfully Updated";
	}

	@Override
	public Page<News> getPendingNews(Pageable pageable) {
		return repository.findAllByStatus(Status.PENDING, pageable);
	}

	@Override
	public News getNews(String id) {
		Optional<News> News = repository.findById(id);

		if (News.isPresent()) {
			return News.get();
		} else {
			return null;
		}
	}

	@Override
	public String deleteNews(String id) {
		repository.deleteById(id);
		return "Successfully Deleted";
	}

	@Override
	public String updateRejectStatus(String id, String reason) {
		News news = getNews(id);
		news.setStatus(Status.REJECTED);
		news.setReason(reason);
		repository.save(news);
		return "DONE";

	}

	@Override
	public String updateAcceptStatus(String id) {
		News news = getNews(id);
		news.setStatus(Status.ACCEPTED);
		news.setReason("NONE");
		repository.save(news);
		return "DONE";
	}

	@Override
	public List<News> getTodayNews() {
		LocalDate today = LocalDate.now();
        ZonedDateTime zonedDateTime = today.atStartOfDay(ZoneId.of("UTC"));
        Date utcDate = Date.from(zonedDateTime.toInstant());
		
		return repository.findAllByDate(utcDate);
	}

	@Override
	public List<News> getBreakingNews() {
		Category category = repo.findAllByCategoryName("BREAKING NEWS");
		return repository.findAllByCategory(category);
	}

	@Override
	public void increaseViews(String id) {
		Optional<News> news = repository.findById(id);

		if (news.isPresent()) {
			System.out.println("present");
			news.get().setViews((news.get().getViews()) + 1);
			System.out.println(news.get().getViews());
			repository.save(news.get());
		}
	}

	@Override
	public List<News> getPopularNews() {
		return repository.findAllByStatusOrderByViewsDesc(Status.ACCEPTED, Sort.Direction.DESC);
	}

	@Override
	public List<News> searchNews(String search) {
		return dao.searchNews(search);
	}

	@Override
	public Page<News> getRejectedNews(Pageable pageable) {
		return repository.findAllByStatus(Status.REJECTED, pageable);
	}

	@Override
	public List<News> getAllNews() {
		return repository.findAllByStatus(Status.ACCEPTED);
	}

	@Override
	public List<News> getCategory(String value) {
		Category category = repo.findAllByCategoryName(value);
		return repository.findAllByCategory(category);
	}

	@Override
	public List<News> getSensationalNews() {
		Category category = repo.findAllByCategoryName("SENSATIONAL NEWS");
		return repository.findAllByCategory(category);
	}
}
