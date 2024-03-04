package com.petAdoption.petPalFinder.models;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(value = "appointment_statuses")
public class AppointmentStatus {
    @Id
    private String _id;
    @DocumentReference(collection = "veterinary_doctors")
    private VeterinaryDoctor doctorId;
    private String requesterId;
    private String requesterType;
    private String reason;
    private String status;
    private Date requestedDate;
    private Date acceptOrRejectedDate;
    private Date appointmentDate;
}
