package com.petAdoption.petPalFinder.dto;

import com.petAdoption.petPalFinder.models.AppointmentStatus;
import com.petAdoption.petPalFinder.models.Location;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AppointmentStatusDto {
    private AppointmentStatus appointmentStatus;
    private String profileUrl;
    private String name;
    private String email;
    private Long contactNumber;
    private Location location;
}
