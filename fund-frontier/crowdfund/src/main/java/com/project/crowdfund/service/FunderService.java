package com.project.crowdfund.service;

import org.springframework.data.domain.Page;

import com.project.crowdfund.dto.FunderDto;
import com.project.crowdfund.dto.RequestDto;
import com.project.crowdfund.model.Funder;

public interface FunderService {

    Funder saveFunder(FunderDto funder);

    Funder getFunder(String email);

    Page<Funder> findAll(Integer pageNo, Integer pageSize);

    Funder updateFunder(FunderDto funder);

    Funder save(RequestDto user);

    Funder getFunderByEmail(String userEmail);

}
