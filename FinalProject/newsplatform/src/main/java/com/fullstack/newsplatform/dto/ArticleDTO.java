package com.fullstack.newsplatform.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ArticleDTO {

	private String articleUid;
	private String title;
	private MultipartFile[] images;
	private String content;
	private String category;
}
