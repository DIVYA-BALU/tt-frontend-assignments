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
import com.fullstack.newsplatform.repository.ArticleRepository;
import com.fullstack.newsplatform.service.ArticleService;

@Service
public class ArticleServiceImpl implements ArticleService {

	@Autowired
	ArticleRepository repository;

	@Value("${upload.folder}")
	String upload;

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

			Article article2 = Article.builder().articleUid(article.getArticleUid()).title(article.getTitle())
					.images(images).content(article.getContent()).category(article.getCategory()).date(utcDate)
					.views(0).reason("").status("PENDING").isSaved(false).build();
			repository.save(article2);
			return "Successfully Added";
		}
	}

	@Override
	public Page<Article> getArticles(Pageable pageable) {
		return repository.findAllByStatus("ACCEPTED", pageable);
	}
	
	@Override
	public Page<Article> getRejectedArticles(Pageable pageable) {
		return repository.findAllByStatus("REJECTED", pageable);
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
		article.setStatus("REJECTED");
		article.setReason(reason);
		repository.save(article);
		return "DONE";
	}

	@Override
	public String updateAcceptStatus(String id) {
		Article article = getArticle(id);
		article.setStatus("ACCEPTED");
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
		return repository.findAllByStatus("PENDING", pageable);
	}

}
