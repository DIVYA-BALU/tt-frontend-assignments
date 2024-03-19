package com.petAdoption.petPalFinder.models;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(value = "website_revenues")
public class WebsiteRevenue {
    @Id
    private String _id;
    private Double amount;
    private Date date;
    private String userId;
}
