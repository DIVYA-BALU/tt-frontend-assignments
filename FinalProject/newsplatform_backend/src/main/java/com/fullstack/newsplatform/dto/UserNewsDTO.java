package com.fullstack.newsplatform.dto;

import java.time.LocalDate;
import org.springframework.web.multipart.MultipartFile;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserNewsDTO {

    private String name;
	private String email;
	private String phoneNo;
	private MultipartFile[] images;
	private LocalDate date;
	private String content;
	private String status;
}
