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

import com.fullstack.newsplatform.dto.ExplainersDTO;
import com.fullstack.newsplatform.model.Explainers;
import com.fullstack.newsplatform.repository.ExplainerRepository;
import com.fullstack.newsplatform.service.ExplainersService;

@Service
public class ExplainersServiceImpl implements ExplainersService {

	@Autowired
	ExplainerRepository repository;

	@Value("${upload.folder}")
	String upload;

	@Override
	public String addExplainers(ExplainersDTO explainers) throws IOException {
		String s = explainers.getImage().getOriginalFilename();

		String fileName = upload + File.separator + s;

		String urlName = "http://localhost:8080/static/uploads/" + s;

		Files.copy(explainers.getImage().getInputStream(), Paths.get(fileName));

		LocalDate today = LocalDate.now();
		ZonedDateTime zonedDateTime = today.atStartOfDay(ZoneId.of("UTC"));
		Date utcDate = Date.from(zonedDateTime.toInstant());

		Explainers explainers2 = Explainers.builder().explainersUid(explainers.getExplainerssUid())
				.title(explainers.getTitle()).image(urlName).content(explainers.getContent()).date(utcDate).views(0)
				.reason("").status("PENDING").build();

		repository.save(explainers2);
		return "Successfully Added";
	}

	@Override
	public Page<Explainers> getAllExplainers(Pageable pageable) {
		return repository.findAllByStatus("ACCEPTED", pageable);
	}

	@Override
	public Explainers getExplainers(String id) {
		Optional<Explainers> explainers = repository.findById(id);

		if (explainers.isPresent()) {
			return explainers.get();
		} else {
			return null;
		}
	}

	@Override
	public String editExplainers(Explainers Explainers) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String deleteExplainers(String id) {
		repository.deleteById(id);
		return "Successfully Deleted";
	}

	@Override
	public String updateRejectStatus(String id, String reason) {
		Explainers explainers = getExplainers(id);
		explainers.setStatus("REJECTED");
		explainers.setReason(reason);
		repository.save(explainers);
		return "DONE";
	}

	@Override
	public String updateAcceptStatus(String id) {
		Explainers explainers = getExplainers(id);
		explainers.setStatus("ACCEPTED");
		explainers.setReason("NONE");
		repository.save(explainers);
		return "DONE";
	}

	@Override
	public void increaseViews(String id) {
		Optional<Explainers> explainers = repository.findById(id);
		explainers.get().setViews((explainers.get().getViews()) + 1);
		repository.save(explainers.get());
	}

	@Override
	public List<Explainers> getPopularArticles() {
		return repository.findAllByStatusOrderByViewsDesc("ACCEPTED", Sort.Direction.DESC);
	}

	@Override
	public Page<Explainers> getRejectedExplainers(Pageable pageable) {
		return repository.findAllByStatus("REJECTED", pageable);
	}

	@Override
	public Page<Explainers> getPendingExplainers(Pageable pageable) {
		return repository.findAllByStatus("PENDING", pageable);
	}
}
