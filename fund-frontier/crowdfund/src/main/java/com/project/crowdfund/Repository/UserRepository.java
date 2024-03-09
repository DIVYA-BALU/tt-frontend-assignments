package com.project.crowdfund.Repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.project.crowdfund.model.Users;

@Repository
public interface UserRepository extends MongoRepository<Users, String> {

    public Optional<Users> findByEmail(String email);

    public boolean existsByEmail(String email);

    public Users findBy_id(String _id);

}
