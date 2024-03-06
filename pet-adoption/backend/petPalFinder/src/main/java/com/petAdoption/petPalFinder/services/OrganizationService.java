package com.petAdoption.petPalFinder.services;

import java.util.List;

import com.petAdoption.petPalFinder.dto.OrganizationRegistrationDto;
import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.dto.StatusUpdateDto;
import com.petAdoption.petPalFinder.models.Organization;

public interface OrganizationService {
    public StatusMessage save(OrganizationRegistrationDto organizationRegistrationDto);
    public List<Organization> getInitiatedOrganization();
    public Organization getOrganizationById(String id);
    public StatusMessage updateStatus(StatusUpdateDto statusUpdateDto);
    public List<String> searchCity(String value);
    public StatusMessage updateOrganization(OrganizationRegistrationDto organizationRegistrationDto);
}
