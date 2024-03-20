package com.fullstack.newsplatform.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class NewsDTO {

	private String newsUid;
	private String title;
	private String synopsis;
	private MultipartFile[] images;
	private String content;
	private String category;
}
