package com.fullstack.newsplatform.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.fullstack.newsplatform.model.Category;

public interface CategoryRepository extends MongoRepository<Category, String>{

	Category findAllByCategoryName(String category);

}
