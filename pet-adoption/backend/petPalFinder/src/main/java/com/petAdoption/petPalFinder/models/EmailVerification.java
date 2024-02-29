package com.petAdoption.petPalFinder.models;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(value = "email_verifications")
public class EmailVerification {
    private String email;
    private Integer otp;
    private Date createdDate;
    private Date validTill;
}
