package com.project.crowdfund.service.serviceimp;

import java.util.List;

import org.springframework.stereotype.Service;

import com.project.crowdfund.Repository.FunderRepository;
import com.project.crowdfund.Repository.UserRepository;
import com.project.crowdfund.dto.FunderDto;
import com.project.crowdfund.model.Funder;
import com.project.crowdfund.model.Users;
import com.project.crowdfund.service.FunderService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FunderServiceImp implements FunderService{

    private final FunderRepository funderRepository;
    private final UserRepository userRepository;

    @Override
    public Funder saveFunder(FunderDto funderDto) {   

        Users user = userRepository.findByEmail(funderDto.getEmail()).get();
        Funder funder = Funder.builder()
                        .firstName(funderDto.getFirstName())
                        .lastName(funderDto.getLastName())
                        .email(user)
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
    public List<Funder> findAll() {
        return funderRepository.findAll();
    }

    @Override
    public Funder updateFunder(FunderDto funderDto) {
        return saveFunder(funderDto);
    }


}
