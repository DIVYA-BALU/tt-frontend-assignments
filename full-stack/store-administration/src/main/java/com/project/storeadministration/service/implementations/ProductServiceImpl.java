package com.project.storeadministration.service.implementations;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.project.storeadministration.model.Product;
import com.project.storeadministration.repository.CustomProductRepository;
import com.project.storeadministration.repository.ProductRepository;
import com.project.storeadministration.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

  @Autowired
  private ProductRepository productRepository;

  @Autowired
  private CustomProductRepository customProductRepository;

  public List<Product> saveProducts(List<Product> products) {
    return productRepository.saveAll(products);
  }

  public Product saveProduct(Product product) {
    product.setAvailableQuantity(product.getTotalQuantity());
    return productRepository.save(product);
  }

  @Override
  public Page<Product> getProductDetails(int pageNo, int pageSize, String branchId, String sectionId) {
    PageRequest pageable = PageRequest.of(pageNo, pageSize);
    return customProductRepository.getProductDetails(branchId, sectionId, pageable);
  }

  @Override
  public Product updateQuantity(String productId, int quantity) {
    Optional<Product> optionalProduct = productRepository.findById(productId);

    if (!optionalProduct.isPresent())
      throw new RuntimeException("Product not found with id: " + productId);

    Product existingProduct = optionalProduct.get();
    int updatedQuantity = existingProduct.getTotalQuantity() + quantity;
    existingProduct.setTotalQuantity(updatedQuantity);
    return productRepository.save(existingProduct);
  }

  @Override
  public List<Product> getProductDetails(String branchId, String sectionId, String search) {
    return customProductRepository.getProductDetails(branchId, sectionId, search);
  }
}
