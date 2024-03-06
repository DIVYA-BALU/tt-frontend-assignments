package com.project.crowdfund.model;

import java.math.BigDecimal;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SuccessStory {
    @Id
    private String _id;
    private String email;
    private String story;
    private BigDecimal amountRaised;
}
