package com.fullstack.newsplatform.service;

import java.io.IOException;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.fullstack.newsplatform.dto.ExplainersDTO;
import com.fullstack.newsplatform.model.Explainers;

public interface ExplainersService {

	String addExplainers(ExplainersDTO Explainers) throws IOException;

	Page<Explainers> getAllExplainers(Pageable pageable);

	Explainers getExplainers(String id);

	String editExplainers(Explainers Explainers);

	String deleteExplainers(String id);

	String updateRejectStatus(String id, String reason);

	String updateAcceptStatus(String id);

	void increaseViews(String id);

	List<Explainers> getPopularArticles();

	Page<Explainers> getRejectedExplainers(Pageable pageable);

	Page<Explainers> getPendingExplainers(Pageable pageable);
}
