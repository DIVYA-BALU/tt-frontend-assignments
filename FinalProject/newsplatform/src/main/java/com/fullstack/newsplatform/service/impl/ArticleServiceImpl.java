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
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fullstack.newsplatform.dto.ArticleDTO;
import com.fullstack.newsplatform.model.Article;
import com.fullstack.newsplatform.model.Category;
import com.fullstack.newsplatform.model.EmailDetails;
import com.fullstack.newsplatform.model.Role;
import com.fullstack.newsplatform.model.Status;
import com.fullstack.newsplatform.model.User;
import com.fullstack.newsplatform.repository.ArticleRepository;
import com.fullstack.newsplatform.repository.CategoryRepository;
import com.fullstack.newsplatform.repository.RoleRepository;
import com.fullstack.newsplatform.repository.UserRepository;
import com.fullstack.newsplatform.service.ArticleService;
import com.fullstack.newsplatform.service.EmailService;

@Service
public class ArticleServiceImpl implements ArticleService {

	@Autowired
	ArticleRepository repository;

	@Value("${upload.folder}")
	String upload;

	@Autowired
	CategoryRepository repo;
	
	@Autowired
	UserRepository repository3;

	@Autowired
	RoleRepository repository2;
	
	@Autowired
	EmailService service2;

	@Override
	public String addArticle(ArticleDTO article) throws IOException {

		if (existsByUid(article.getArticleUid())) {
			return "Article already exists! Check Article Unique id!";
		} else {
			List<String> images = new ArrayList<>();

			for (MultipartFile file : article.getImages()) {

				String s = file.getOriginalFilename();

				String fileName = upload + File.separator + s;
				
				String urlName = "http://localhost:8080/static/uploads/" + s;

				Files.copy(file.getInputStream(), Paths.get(fileName));

				images.add(urlName);

			}
			
			LocalDate today = LocalDate.now();
	        ZonedDateTime zonedDateTime = today.atStartOfDay(ZoneId.of("UTC"));
	        Date utcDate = Date.from(zonedDateTime.toInstant());
	        
	        Category category = repo.findAllByCategoryName(article.getCategory());

			Article article2 = Article.builder().articleUid(article.getArticleUid()).title(article.getTitle())
					.images(images).content(article.getContent()).category(category).date(utcDate)
					.views(0).reason("").status(Status.PENDING).build();
			repository.save(article2);
			
			Role role = repository2.findByroleName("ADMIN");

			List<User> users = repository3.findByRole(role);

			for (User user : users) {
				EmailDetails emailDetails2 = EmailDetails.builder().recipient(user.getEmail())
						.subject("Article Submission")
						.msgBody("Dear Editor" + ",\n\n"
								+ "We would like to inform you that there is a new approval awaiting your review.\n\n"
								+ "Kindly take a moment to assess the request and proceed with the necessary action.\n\n"
								+ "Thank you for your attention to this matter.\n\n" + "Sincerely,\nInsigntNow")
						.build();

				service2.sendSimpleMail(emailDetails2);
			}
			return "Successfully Added";
		}
	}

	@Override
	public Page<Article> getArticles(Pageable pageable) {
		return repository.findAllByStatus(Status.ACCEPTED, pageable);
	}
	
	@Override
	public Page<Article> getRejectedArticles(Pageable pageable) {
		return repository.findAllByStatus(Status.REJECTED, pageable);
	}

	@Override
	public Article getArticle(String id) {
		Optional<Article> article = repository.findById(id);

		if (article.isPresent()) {
			return article.get();
		} else {
			return null;
		}
	}

	@Override
	public void increaseViews(String id) {
		Optional<Article> article = repository.findById(id);

		if (article.isPresent()) {
			article.get().setViews((article.get().getViews()) + 1);
			repository.save(article.get());
		}
	}

	@Override
	public String editArticle(Article article) {
		Optional<Article> article3 = repository.findById(article.getId());

		Article article2 = Article.builder().title(article.getTitle()).images(article.getImages())
				.content(article.getContent()).category(article.getCategory()).date(article3.get().getDate())
				.views(article3.get().getViews()).reason(article3.get().getReason()).status(article3.get().getStatus())
				.build();

		repository.save(article2);
		return "Successfully Updated";
	}

	@Override
	public String deleteArticle(String id) {
		repository.deleteById(id);
		return "Successfully Deleted";
	}

	@Override
	public String updateRejectStatus(String id, String reason) {
		Article article = getArticle(id);
		article.setStatus(Status.REJECTED);
		article.setReason(reason);
		repository.save(article);
		return "DONE";
	}

	@Override
	public String updateAcceptStatus(String id) {
		Article article = getArticle(id);
		article.setStatus(Status.ACCEPTED);
		article.setReason("NONE");
		repository.save(article);
		return "DONE";
	}

	@Override
	public List<Article> getPopularArticles() {
		return repository.findAllByViews();
	}

	public boolean existsByUid(String articleUid) {
		return repository.existsByArticleUid(articleUid);
	}

	@Override
	public Page<Article> getPendingArticles(Pageable pageable) {
		return repository.findAllByStatus(Status.PENDING, pageable);
	}

}
