package com.petAdoption.petPalFinder.dto;

import java.util.List;

import com.petAdoption.petPalFinder.models.WebsiteRevenue;

import lombok.Data;

@Data
public class WebsiteRevenueDto {
    List<WebsiteRevenue> revenue;
    Double monthRevenue;
    Double totalRevenue;
}
