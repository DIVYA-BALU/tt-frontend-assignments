package com.project.crowdfund.model;

import org.springframework.data.annotation.Id;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Role {
    @Id
    private String _id;
    private String role;
}
