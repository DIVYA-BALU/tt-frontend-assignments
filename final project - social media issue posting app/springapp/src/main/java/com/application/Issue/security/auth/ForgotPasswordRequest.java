package com.application.Issue.security.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ForgotPasswordRequest {
    
    private String userName;
    private String userPassword;
    private String confirmPassword;
}
