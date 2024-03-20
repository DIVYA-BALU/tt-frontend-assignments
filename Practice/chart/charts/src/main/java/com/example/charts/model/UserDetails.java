package com.example.charts.model;
import org.springframework.data.annotation.Id;

import java.sql.Date;
import java.time.LocalDate;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document(collection = "userDetails")
public class UserDetails {
    @Id
    private String _id;
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private Date registeredDate;
    private double latitude;
    private double longitude;
    private String city;
}
