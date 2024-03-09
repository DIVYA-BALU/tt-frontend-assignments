package com.project.crowdfund.service.serviceimp;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.project.crowdfund.Repository.FunderRepository;
import com.project.crowdfund.dto.FunderDto;
import com.project.crowdfund.dto.RequestDto;
import com.project.crowdfund.model.Funder;
import com.project.crowdfund.service.FunderService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FunderServiceImp implements FunderService {

    private final FunderRepository funderRepository;

    @Override
    public Funder saveFunder(FunderDto funderDto) {

        Funder funder = Funder.builder()
                ._id(funderDto.get_id())
                .firstName(funderDto.getFirstName())
                .lastName(funderDto.getLastName())
                .email(funderDto.getEmail())
                .phoneNumber(funderDto.getPhoneNumber())
                .countryOfBirth(funderDto.getCountryOfBirth())
                .countryOfResidence(funderDto.getCountryOfResidence())
                .address(funderDto.getAddress())
                .city(funderDto.getCity())
                .state(funderDto.getState())
                .zipCode(funderDto.getZipCode())
                .occupation(funderDto.getOccupation())
                .build();
        return funderRepository.save(funder);
    }

    @Override
    public Funder getFunder(String email) {
        return funderRepository.findByEmail(email);
    }

    @Override
    public Page<Funder> findAll(Integer pageNo, Integer PageSize) {
        PageRequest pageRequest = PageRequest.of(pageNo, PageSize);
        Page<Funder> pageableFunder = funderRepository.findAll(pageRequest);
        return pageableFunder;
    }

    @Override
    public Funder updateFunder(FunderDto funderDto) {
        return saveFunder(funderDto);
    }

    public Funder save(RequestDto user) {

        Funder funder = Funder.builder()
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .phoneNumber("")
                .countryOfBirth("")
                .countryOfResidence("")
                .address("")
                .city("")
                .state("")
                .zipCode("")
                .occupation("")
                .build();
        System.out.println(funder);
        return funderRepository.save(funder);
    }

    @Override
    public Funder getFunderByEmail(String userEmail) {
        return funderRepository.findByEmail(userEmail);
    }
}
