package com.project.crowdfund.service;

import java.util.List;

import com.project.crowdfund.dto.FunderDto;
import com.project.crowdfund.model.Funder;

public interface FunderService {

    Funder saveFunder(FunderDto funder);

    Funder getFunder(String email);

    List<Funder> findAll();

    Funder updateFunder(FunderDto funder);

    
}
