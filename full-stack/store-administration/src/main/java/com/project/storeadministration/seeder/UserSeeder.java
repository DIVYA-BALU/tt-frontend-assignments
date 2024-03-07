package com.project.storeadministration.seeder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.DependsOn;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.project.storeadministration.model.User;
import com.project.storeadministration.repository.RoleRepository;
import com.project.storeadministration.repository.UserRepository;

@Component
@DependsOn("roleSeeder")
public class UserSeeder implements CommandLineRunner {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private RoleRepository roleRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Override
  public void run(String... args) throws Exception {
    if (userRepository.count() != 0)
      return;
    User admin = new User();
    admin.setEmailId("thamil@gmail.com");
    admin.setPassword(passwordEncoder.encode("admin"));
    admin.setName("Thamilarasan");
    admin.setRole(roleRepository.findByName("ADMIN").get());
    userRepository.save(admin);
  }
}
