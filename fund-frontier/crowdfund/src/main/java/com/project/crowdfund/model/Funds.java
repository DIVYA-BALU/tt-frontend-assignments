package com.project.crowdfund.model;


import java.util.Date;

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
    private Double totalAmount;
    private Date date;
    private Double studentAmount;
    private Double maintainenceAmount;
}
