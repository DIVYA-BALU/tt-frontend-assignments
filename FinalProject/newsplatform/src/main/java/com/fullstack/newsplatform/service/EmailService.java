package com.fullstack.newsplatform.service;

import com.fullstack.newsplatform.model.EmailDetails;

public interface EmailService {

	String sendSimpleMail(EmailDetails details);

	String sendMailWithAttachment(EmailDetails details);

}
