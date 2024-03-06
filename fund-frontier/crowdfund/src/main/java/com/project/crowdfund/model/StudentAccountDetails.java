package com.project.crowdfund.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StudentAccountDetails {
    @Id
    private String _id;
    @DocumentReference
    private Users email;
    private String accountNumber;
    private String isbn;
    private String bankName;
    private String branchName;


}
