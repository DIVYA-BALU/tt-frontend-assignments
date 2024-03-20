package com.fullstack.newsplatform.service.impl;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.fullstack.newsplatform.dto.ShortReadsDTO;
import com.fullstack.newsplatform.model.Category;
import com.fullstack.newsplatform.model.EmailDetails;
import com.fullstack.newsplatform.model.Role;
import com.fullstack.newsplatform.model.ShortReads;
import com.fullstack.newsplatform.model.Status;
import com.fullstack.newsplatform.model.User;
import com.fullstack.newsplatform.repository.CategoryRepository;
import com.fullstack.newsplatform.repository.RoleRepository;
import com.fullstack.newsplatform.repository.ShortReadsRepository;
import com.fullstack.newsplatform.repository.UserRepository;
import com.fullstack.newsplatform.service.EmailService;
import com.fullstack.newsplatform.service.ShortReadsService;

@Service
public class ShortReadsServiceImpl implements ShortReadsService {

	@Autowired
	ShortReadsRepository repository;
	
	@Autowired
	CategoryRepository repo;

	@Value("${upload.folder}")
	String upload;
	
	@Autowired
	UserRepository repository3;

	@Autowired
	RoleRepository repository2;
	
	@Autowired
	EmailService service2;

	@Override
	public String addShortReads(ShortReadsDTO shortReads) throws IOException {

		String s = shortReads.getImage().getOriginalFilename();

		String fileName = upload + File.separator + s;

		String urlName = "http://localhost:8080/static/uploads/" + s;

		Files.copy(shortReads.getImage().getInputStream(), Paths.get(fileName));
		
		LocalDate today = LocalDate.now();
        ZonedDateTime zonedDateTime = today.atStartOfDay(ZoneId.of("UTC"));
        Date utcDate = Date.from(zonedDateTime.toInstant());
        
        Category category = repo.findAllByCategoryName(shortReads.getCategory());

		ShortReads shortReads2 = ShortReads.builder().shortReadsUid(shortReads.getShortReadsUid())
				.title(shortReads.getTitle()).image(urlName).content(shortReads.getContent())
				.category(category).date(utcDate).views(0).reason("").status(Status.PENDING).build();
		repository.save(shortReads2);
		
		Role role = repository2.findByroleName("ADMIN");

		List<User> users = repository3.findByRole(role);

		for (User user : users) {
			EmailDetails emailDetails2 = EmailDetails.builder().recipient(user.getEmail())
					.subject("Short Reads Submission")
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
	public Page<ShortReads> getAllShortReads(Pageable pageable) {
		return repository.findAllByStatus(Status.ACCEPTED, pageable);
	}

	@Override
	public ShortReads getShortReads(String id) {
		Optional<ShortReads> shortReads = repository.findById(id);

		if (shortReads.isPresent()) {
			return shortReads.get();
		} else {
			return null;
		}
	}

	@Override
	public String editShortReads(ShortReads shortReads) {
		Optional<ShortReads> shortReads2 = repository.findById(shortReads.getId());

		ShortReads shortReads3 = ShortReads.builder().title(shortReads.getTitle()).image(shortReads.getImage())
				.content(shortReads.getContent()).category(shortReads.getCategory()).date(shortReads2.get().getDate())
				.views(shortReads2.get().getViews()).reason(shortReads2.get().getReason())
				.status(shortReads2.get().getStatus()).build();

		repository.save(shortReads3);
		return "Successfully Updated";
	}

	@Override
	public String deleteShortReads(String id) {
		repository.deleteById(id);
		return "Successfully Deleted";
	}

	@Override
	public String updateRejectStatus(String id, String reason) {
		ShortReads shortReads = getShortReads(id);
		shortReads.setStatus(Status.REJECTED);
		shortReads.setReason(reason);
		repository.save(shortReads);
		return "DONE";
	}

	@Override
	public String updateAcceptStatus(String id) {
		ShortReads shortReads = getShortReads(id);
		shortReads.setStatus(Status.ACCEPTED);
		shortReads.setReason("NONE");
		repository.save(shortReads);
		return "DONE";
	}

	@Override
	public void increaseViews(String id) {
		Optional<ShortReads> shortReads = repository.findById(id);
			shortReads.get().setViews((shortReads.get().getViews()) + 1);
			repository.save(shortReads.get());
	}

	@Override
	public List<ShortReads> getPopularArticles() {
		return repository.findAllByStatusOrderByViewsDesc(Status.ACCEPTED, Sort.Direction.DESC);
	}

	@Override
	public Page<ShortReads> getRejectedShortReads(Pageable pageable) {
		return repository.findAllByStatus(Status.REJECTED, pageable);
	}

	@Override
	public Page<ShortReads> getPendingShortReads(Pageable pageable) {
		return repository.findAllByStatus(Status.PENDING, pageable);
	}

}
