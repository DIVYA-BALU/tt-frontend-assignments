package com.project.storeadministration.seeder;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.DependsOn;
import org.springframework.stereotype.Component;

import com.project.storeadministration.model.Permission;
import com.project.storeadministration.model.Role;
import com.project.storeadministration.repository.PermissionRepository;
import com.project.storeadministration.repository.RoleRepository;

@Component
@DependsOn("permissionSeeder")
public class RoleSeeder implements CommandLineRunner {

  @Autowired
  private RoleRepository roleRepository;

  @Autowired
  private PermissionRepository permissionRepository;

  @Override
  public void run(String... args) throws Exception {
    if (roleRepository.count() != 0)
      return;
    List<String> adminPermissionNames = Arrays.asList(
        "FinancialManagement",
        "AddInvestment",
        "StoreDetailsManagement",
        "EmployeeManagement",
        "EmployeeSectionAllocation");
    List<String> managerPermissionNames = Arrays.asList(
        "StoreDetailsManagement",
        "Biller",
        "EmployeeManagement",
        "EmployeeSectionAllocation",
        "MarkAttendance");
    List<String> employeePermissionNames = Arrays.asList(
        "MarkAttendance");

    Role admin = createRoleWithPermissions("ADMIN", adminPermissionNames);
    roleRepository.save(admin);

    Role manager = createRoleWithPermissions("MANAGER", managerPermissionNames);
    roleRepository.save(manager);

    Role employee = createRoleWithPermissions("EMPLOYEE", employeePermissionNames);
    roleRepository.save(employee);
  }

  private Role createRoleWithPermissions(String roleName, List<String> permissionNames) {
    Role role = new Role();
    role.setName(roleName);

    List<Permission> permissions = new ArrayList<>();
    for (String permissionName : permissionNames) {
      Permission permission = permissionRepository.findByName(permissionName);
      permissions.add(permission);
    }

    role.setPermissions(permissions);

    return role;
  }
}
