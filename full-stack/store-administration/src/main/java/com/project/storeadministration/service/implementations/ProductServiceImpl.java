package com.project.storeadministration.service.implementations;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.project.storeadministration.dto.ProductDetails;
import com.project.storeadministration.model.Product;
import com.project.storeadministration.repository.ProductRepository;
import com.project.storeadministration.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

  @Autowired
  private ProductRepository productRepository;

  public List<Product> saveProducts(List<Product> products) {
    return productRepository.saveAll(products);
  }

  @Override
  public Page<ProductDetails> getProductDetails(int pageNo, int pageSize) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getProductDetails'");
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
}
