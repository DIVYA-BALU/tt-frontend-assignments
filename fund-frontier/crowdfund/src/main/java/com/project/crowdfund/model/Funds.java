package com.project.crowdfund.model;

import java.math.BigDecimal;
import java.sql.Date;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Funds {
    @Id
    private String _id;
    private String funderEmail;
    private String studentEmail;
    private BigDecimal totalAmount;
    private Date date;
    private BigDecimal studentAmount;
    private BigDecimal maintainenceAmount;
}
