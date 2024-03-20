package com.fullstack.newsplatform.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ExplainersDTO {

	private String ExplainerssUid;
	private String title;
	private MultipartFile image;
	private String content;
}
