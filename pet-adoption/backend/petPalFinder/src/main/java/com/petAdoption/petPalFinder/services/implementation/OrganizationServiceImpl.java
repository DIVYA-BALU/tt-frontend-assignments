package com.petAdoption.petPalFinder.services.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petAdoption.petPalFinder.dao.OrganizationDao;
import com.petAdoption.petPalFinder.dto.OrganizationRegistrationDto;
import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.dto.StatusUpdateDto;
import com.petAdoption.petPalFinder.models.Organization;
import com.petAdoption.petPalFinder.repositorys.OrganizationRepository;
import com.petAdoption.petPalFinder.services.EmailVerificationService;
import com.petAdoption.petPalFinder.services.FileService;
import com.petAdoption.petPalFinder.services.OrganizationService;

@Service
public class OrganizationServiceImpl implements OrganizationService {

    @Autowired
    OrganizationRepository organizationRepository;

    @Autowired
    FileService fileService;

    @Autowired
    OrganizationDao organizationDao;

    @Autowired
    EmailVerificationService emailVerificationService;

    @Override
    public StatusMessage save(OrganizationRegistrationDto organizationRegistrationDto) {
        StatusMessage statusMessage = new StatusMessage();
        String url = fileService.saveFile(organizationRegistrationDto.getOrganizationPhoto(), "organization-profile");
        Organization organization = Organization.builder().name(organizationRegistrationDto.getName())
                .contactNumber(organizationRegistrationDto.getContactNumber())
                .location(organizationRegistrationDto.getLocation())
                .email(organizationRegistrationDto.getEmail())
                .status(organizationRegistrationDto.getStatus())
                .organizationPhoto(url)
                .build();
        organizationRepository.save(organization);
        statusMessage.setMessage("data saved");
        return statusMessage;
    }

    @Override
    public List<Organization> getInitiatedOrganization() {
        return organizationRepository.findByStatus("initiated");
    }

    @Override
    public Organization getApprovedOrganization() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getApprovedOrganization'");
    }

    @Override
    public StatusMessage updateStatus(StatusUpdateDto statusUpdateDto) {
        organizationDao.updateStatus(statusUpdateDto);
        String email = organizationRepository.findById(statusUpdateDto.getId()).get().getEmail();
        emailVerificationService.sendStatusMail(email,statusUpdateDto,"ORGANIZATION");
        StatusMessage statusMessage = new StatusMessage();
        statusMessage.setMessage("status updated");
        return statusMessage;
    }

}
