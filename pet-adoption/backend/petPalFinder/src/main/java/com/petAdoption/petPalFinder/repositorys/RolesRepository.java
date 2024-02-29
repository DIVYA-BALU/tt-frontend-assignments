package com.petAdoption.petPalFinder.repositorys;

import com.petAdoption.petPalFinder.models.Roles;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;


@Repository
public interface RolesRepository extends MongoRepository<Roles,String>{
    Optional<Roles> findByRole(String role);
}
