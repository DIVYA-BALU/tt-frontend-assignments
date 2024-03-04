package com.petAdoption.petPalFinder.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.petAdoption.petPalFinder.dto.AppointmentStatusDto;
import com.petAdoption.petPalFinder.dto.AppointmentUpdate;
import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.models.AppointmentStatus;
import com.petAdoption.petPalFinder.services.AppointmentStatusService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;



@Controller
@CrossOrigin
@RequestMapping(path = "appointment")
public class AppointmentStatusController {

    @Autowired
    AppointmentStatusService appointmentStatusService;

    @PreAuthorize("hasRole('ADOPTER') OR hasRole('ORGANIZATION')")
    @PostMapping
    public ResponseEntity<StatusMessage> requestAppointment(@RequestBody AppointmentStatus appointmentStatus) {
        return ResponseEntity.ok(appointmentStatusService.requestAppointment(appointmentStatus));
    }
    
    @PreAuthorize("hasRole('ADOPTER') OR hasRole('ORGANIZATION')")
    @GetMapping
    public ResponseEntity<List<AppointmentStatus>> viewRequestedAppointmentByUser(@RequestParam String id) {
        return ResponseEntity.ok(appointmentStatusService.getRequestedUserAppoinments(id));
    }

    @PreAuthorize("hasRole('VETERINARY_DOCTOR')")
    @GetMapping("doctor")
    public ResponseEntity<List<AppointmentStatusDto>> viewRequestedAppointment(@RequestParam String id) {
        return ResponseEntity.ok(appointmentStatusService.getRequestedAppoinments(id));
    }

    @PreAuthorize("hasRole('VETERINARY_DOCTOR')")
    @GetMapping("accepted")
    public ResponseEntity<List<AppointmentStatusDto>> viewAcceptedAppointment(@RequestParam String id) {
        return ResponseEntity.ok(appointmentStatusService.getRequestedAppoinments(id));
    }

    @PutMapping
    public ResponseEntity<StatusMessage> updateStatus(@RequestBody AppointmentUpdate appointmentUpdate) {
        return ResponseEntity.ok(appointmentStatusService.updateAppointment(appointmentUpdate));
    }
    
}
