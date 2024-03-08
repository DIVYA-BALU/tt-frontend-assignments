package com.application.Issue.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "payemnt")
public class Payment {
    
    @Id
    private String id;
    private String name;
    private String mobile;
    private String email;
    private String selectDistrict;
    private String taxType;

}
