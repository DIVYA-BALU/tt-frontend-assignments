package com.petAdoption.petPalFinder.services.implementation;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petAdoption.petPalFinder.dao.AppointmentStatusDao;
import com.petAdoption.petPalFinder.dto.AppointmentStatusDto;
import com.petAdoption.petPalFinder.dto.AppointmentUpdate;
import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.models.Adopter;
import com.petAdoption.petPalFinder.models.AppointmentStatus;
import com.petAdoption.petPalFinder.models.Organization;
import com.petAdoption.petPalFinder.repositorys.AdopterRepository;
import com.petAdoption.petPalFinder.repositorys.AppointmentStatusRepository;
import com.petAdoption.petPalFinder.repositorys.OrganizationRepository;
import com.petAdoption.petPalFinder.services.AppointmentStatusService;

@Service
public class AppointmentStatusServiceImpl implements AppointmentStatusService{

    @Autowired
    AppointmentStatusRepository appointmentStatusRepository;

    @Autowired
    AdopterRepository adopterRepository;

    @Autowired
    OrganizationRepository organizationRepository;

    @Autowired
    AppointmentStatusDao appointmentStatusDao;

    @Override
    public StatusMessage requestAppointment(AppointmentStatus appointmentStatus) {
        StatusMessage statusMessage = new StatusMessage();
        appointmentStatusRepository.save(appointmentStatus);
        statusMessage.setMessage("success");
        return statusMessage;
    }

    @Override
    public StatusMessage updateAppointment(AppointmentUpdate appointmentUpdate) {
        StatusMessage statusMessage = new StatusMessage();
        appointmentStatusDao.updateStatus(appointmentUpdate);
        statusMessage.setMessage("success");
        return statusMessage;
    }

    @Override
    public List<AppointmentStatusDto> getRequestedAppoinments(String id,String status) {
        List<AppointmentStatusDto> list = new ArrayList<>();
        List<AppointmentStatus> appointment = appointmentStatusDao.getInitiatedRequest(id,status);
        for(int  i =0;i<appointment.size();i++){
            AppointmentStatusDto appointmentStatusDto = new AppointmentStatusDto();
            appointmentStatusDto.setReason(appointment.get(i).getReason());
            if(appointment.get(i).getRequesterType().equals("ADOPTER")){
               Adopter adopter = adopterRepository.findById(appointment.get(i).getRequesterId()).get();
               appointmentStatusDto.setLocation(adopter.getLocation());
               appointmentStatusDto.setContactNumber(adopter.getContactNumber());
               appointmentStatusDto.setEmail(adopter.getEmail());
               appointmentStatusDto.setName(adopter.getName());
               appointmentStatusDto.setProfileUrl(adopter.getProfilePhoto());
               appointmentStatusDto.setAppointmentStatus(appointment.get(i));
            }else{
                Organization organization =organizationRepository.findById(appointment.get(i).getRequesterId()).get();
                appointmentStatusDto.setLocation(organization.getLocation());
               appointmentStatusDto.setContactNumber(organization.getContactNumber());
               appointmentStatusDto.setEmail(organization.getEmail());
               appointmentStatusDto.setName(organization.getName());
               appointmentStatusDto.setProfileUrl(organization.getOrganizationPhoto());
               appointmentStatusDto.setAppointmentStatus(appointment.get(i));
            }
            list.add(appointmentStatusDto);
        }
        return list;
    }

    @Override
    public List<AppointmentStatus> getRequestedUserAppoinments(String id) {
        return appointmentStatusDao.getStatusByRequesterId(id);
    }

    @Override
    public List<AppointmentStatusDto> getAcceptedAppointments(String id) {
        List<AppointmentStatusDto> list = new ArrayList<>();
        List<AppointmentStatus> appointment = appointmentStatusDao.getAcceptedRequest(id);
        for(int  i =0;i<appointment.size();i++){
            AppointmentStatusDto appointmentStatusDto = new AppointmentStatusDto();
            if(appointment.get(i).getRequesterType().equals("ADOPTER")){
               Adopter adopter = adopterRepository.findById(appointment.get(i).getRequesterId()).get();
               appointmentStatusDto.setLocation(adopter.getLocation());
               appointmentStatusDto.setContactNumber(adopter.getContactNumber());
               appointmentStatusDto.setEmail(adopter.getEmail());
               appointmentStatusDto.setName(adopter.getName());
               appointmentStatusDto.setProfileUrl(adopter.getProfilePhoto());
               appointmentStatusDto.setAppointmentStatus(appointment.get(i));
            }else{
                Organization organization =organizationRepository.findById(appointment.get(i).getRequesterId()).get();
                appointmentStatusDto.setLocation(organization.getLocation());
               appointmentStatusDto.setContactNumber(organization.getContactNumber());
               appointmentStatusDto.setEmail(organization.getEmail());
               appointmentStatusDto.setName(organization.getName());
               appointmentStatusDto.setProfileUrl(organization.getOrganizationPhoto());
               appointmentStatusDto.setAppointmentStatus(appointment.get(i));
            }
            list.add(appointmentStatusDto);
        }
        return list;
    }
    
}
