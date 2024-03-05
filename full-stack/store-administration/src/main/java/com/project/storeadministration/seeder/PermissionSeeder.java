package com.project.storeadministration.seeder;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.project.storeadministration.model.Permission;
import com.project.storeadministration.repository.PermissionRepository;

@Component
public class PermissionSeeder implements CommandLineRunner{
  @Autowired
  PermissionRepository permissionRepository;

  @Override
  public void run(String... args) throws Exception {
    if (permissionRepository.count() != 0)
    return;
    List<String> permissionNames = Arrays.asList(
                "FinancialManagement",
                "AddInvestment",
                "StoreDetailsManagement",
                "Biller",
                "EmployeeManagement",
                "EmployeeSectionAllocation",
                "MarkAttendance"
        );

        for (String permissionName : permissionNames) {
            Permission permission = new Permission();
            permission.setName(permissionName);
            permissionRepository.save(permission);
        }
  }
}
