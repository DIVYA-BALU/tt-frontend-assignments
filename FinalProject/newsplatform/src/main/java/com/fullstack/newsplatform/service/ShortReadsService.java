package com.fullstack.newsplatform.service;

import java.io.IOException;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.fullstack.newsplatform.dto.ShortReadsDTO;
import com.fullstack.newsplatform.model.ShortReads;

public interface ShortReadsService {

	String addShortReads(ShortReadsDTO shortReads) throws IOException;

	Page<ShortReads> getAllShortReads(Pageable pageable);

	ShortReads getShortReads(String id);

	String editShortReads(ShortReads shortReads);

	String deleteShortReads(String id);

	String updateRejectStatus(String id, String reason);

	String updateAcceptStatus(String id);

	void increaseViews(String id);

	List<ShortReads> getPopularArticles();

	Page<ShortReads> getRejectedShortReads(Pageable pageable);

	Page<ShortReads> getPendingShortReads(Pageable pageable);

}
