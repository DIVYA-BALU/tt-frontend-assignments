package com.petAdoption.petPalFinder.dto;

import java.util.Date;

import lombok.Data;

@Data
public class AppointmentUpdate {
    private String id;
    private String status;
    private Date date;
}
