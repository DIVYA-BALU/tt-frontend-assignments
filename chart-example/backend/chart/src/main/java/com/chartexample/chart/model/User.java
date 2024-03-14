package com.chartexample.chart.model;

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
@Document(value = "users")

public class User {
    @Id
    String _id;
    String firstName;
    String lastName;
    String email;
    Address address;
    Double lattitude;
    Double longitude;
    Date  registeredDate;

   
}
