package com.project.storeadministration.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.project.storeadministration.model.Product;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {
}
