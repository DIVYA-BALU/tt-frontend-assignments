package com.project.storeadministration.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.storeadministration.dto.ProductDetails;
import com.project.storeadministration.exception.CustomException;
import com.project.storeadministration.model.Product;
import com.project.storeadministration.service.ProductService;

@CrossOrigin("*")
@RestController
@RequestMapping("/products")

public class ProductController {

  @Autowired
  private ProductService productService;

  @GetMapping("/hello")
  public String hello() {
    return "Hello Products";
  }

  @PostMapping
  public ResponseEntity<Product> saveProduct(@RequestBody Product product) {
    return new ResponseEntity<Product>(productService.saveProduct(product), HttpStatus.OK);
  }

  @PostMapping("/list")
  public ResponseEntity<List<Product>> saveProducts(@RequestBody List<Product> products) {
    return new ResponseEntity<List<Product>>(productService.saveProducts(products), HttpStatus.OK);
  }

  @GetMapping
  public ResponseEntity<List<Product>> getProductDetails(@RequestParam String branchId,
      @RequestParam(required = false) String sectionId, @RequestParam(required = false) String search)
      throws CustomException {
    return new ResponseEntity<List<Product>>(
        productService.getProductDetails(branchId, sectionId, search), HttpStatus.OK);
  }

  @GetMapping("/page")
  public ResponseEntity<Page<Product>> getProductDetails(@RequestParam(defaultValue = "0") int pageNo,
      @RequestParam(defaultValue = "10") int pageSize, @RequestParam(required = false) String branchId,
      @RequestParam(required = false) String sectionId)
      throws CustomException {
    return new ResponseEntity<Page<Product>>(
        productService.getProductDetails(pageNo, pageSize, branchId, sectionId), HttpStatus.OK);
  }

  @PostMapping("/{productId}/updateQuantity")
  public ResponseEntity<Product> updateQuaEntity(@PathVariable("productId") String productId,
      @RequestParam("quantity") int quantity) throws CustomException {
    return new ResponseEntity<Product>(productService.updateQuantity(productId, quantity), HttpStatus.OK);
  }
}