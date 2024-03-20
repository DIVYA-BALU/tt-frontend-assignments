package com.project.storeadministration.repository;

import java.util.List;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.project.storeadministration.model.Product;

@Repository
public class CustomProductRepository {

  @Autowired
  private MongoTemplate mongoTemplate;

  public List<Product> getProductDetails(String branchId, String sectionId, String search) {
    Query query = new Query(Criteria.where("product.branchIds").is(branchId));

    if (sectionId != null) {
      query.addCriteria(Criteria.where("product.sectionId").is(sectionId));
    }

    if (search != null && !search.isEmpty()) {
      query.addCriteria(Criteria.where("product.name").regex(search, "i"));
    }
    List<Product> products = mongoTemplate.find(query, Product.class);

    return products;
  }

  public Page<Product> getProductDetails(String branchId, String sectionId, String searchByName, Pageable pageable) {
    Query query = new Query();

    if (branchId != null && !branchId.isEmpty()) {
      query.addCriteria(Criteria.where("branch._id").is(branchId));
    }

    if (sectionId != null && !sectionId.isEmpty()) {
      query.addCriteria(Criteria.where("section._id").is(sectionId));
    }

    if (searchByName != null && !searchByName.isEmpty()) {
      query.addCriteria(Criteria.where("productName").regex(searchByName, "i"));
    }

    long total = mongoTemplate.count(query, Product.class);

    query.with(pageable);

    List<Product> products = mongoTemplate.find(query, Product.class);
    return new PageImpl<>(products, pageable, total);

  }
}