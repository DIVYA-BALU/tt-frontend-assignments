package com.project.crowdfund.service.serviceimp;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.project.crowdfund.Repository.FundsRepository;
import com.project.crowdfund.model.Funds;
import com.project.crowdfund.service.FundsService;
import com.project.crowdfund.service.StudentFundsService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FundsServiceImp implements FundsService {
    private final FundsRepository fundsRepository;
    private final StudentFundsService studentFundsService;

    @Override
    public Funds saveFunds(Funds funds) {

        studentFundsService.addAmount(funds.getStudentEmail(), funds.getStudentAmount());

        return fundsRepository.save(funds);
    }

    @Override
    public Page<Funds> getAllFunds(Integer pageNo, Integer pageSize) {
        PageRequest pageRequest = PageRequest.of(pageNo, pageSize);
        Page<Funds> pagingFunds = fundsRepository.findAll(pageRequest);
        return pagingFunds;
    }

    @Override
    public List<Funds> getStudentsByFunder(String email) {
        return fundsRepository.findByFunderEmail(email);
    }

}
