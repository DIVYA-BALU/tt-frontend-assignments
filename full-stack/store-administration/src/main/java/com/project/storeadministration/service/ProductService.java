package com.project.storeadministration.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.project.storeadministration.model.Product;

public interface ProductService {
  List<Product> saveProducts(List<Product> products);

  Product saveProduct(Product product);
  
  Page<Product> getProductDetails(int pageNo, int pageSize, String branchId, String sectionId);

  List<Product> getProductDetails(String branchId, String sectionId, String search);

  Product updateQuantity(String productId, int quantity);
}
