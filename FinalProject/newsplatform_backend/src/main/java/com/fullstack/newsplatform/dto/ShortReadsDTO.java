package com.fullstack.newsplatform.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ShortReadsDTO {

	private String shortReadsUid;
	private String title;
	private MultipartFile image;
	private String category;
	private String content;
}
