package com.petAdoption.petPalFinder.services;

import java.util.Date;
import java.util.List;

import com.petAdoption.petPalFinder.dto.AppointmentStatusDto;
import com.petAdoption.petPalFinder.dto.AppointmentUpdate;
import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.models.AppointmentStatus;

public interface AppointmentStatusService {
    public StatusMessage requestAppointment(AppointmentStatus appointmentStatus);
    public StatusMessage updateAppointment(AppointmentUpdate appointmentUpdate);
    public List<AppointmentStatusDto> getRequestedAppoinments(String id,String status);
    public List<AppointmentStatus> getRequestedUserAppoinments(String id);
    public List<AppointmentStatusDto> getAcceptedAppointments(String id);
}
