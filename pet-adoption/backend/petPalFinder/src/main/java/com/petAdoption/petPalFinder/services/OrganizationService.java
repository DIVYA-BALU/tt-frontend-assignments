package com.petAdoption.petPalFinder.services;

import java.util.List;

import com.petAdoption.petPalFinder.dto.OrganizationRegistrationDto;
import com.petAdoption.petPalFinder.dto.StatusMessage;
import com.petAdoption.petPalFinder.models.Organization;

public interface OrganizationService {
    public StatusMessage save(OrganizationRegistrationDto organizationRegistrationDto);
    public List<Organization> getInitiatedOrganization();
    public Organization getApprovedOrganization();
}
