package com.project.storeadministration.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.project.storeadministration.dto.ProductDetails;
import com.project.storeadministration.model.Product;

public interface ProductService {
  List<Product> saveProducts(List<Product> products);

  Page<ProductDetails> getProductDetails(int pageNo, int pageSize);

  Product updateQuantity(String productId, int quantity);
}
