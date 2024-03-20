package com.fullstack.newsplatform.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.newsplatform.dto.ExplainersDTO;
import com.fullstack.newsplatform.model.Explainers;
import com.fullstack.newsplatform.service.ExplainersService;

@RestController
@RequestMapping("/explainers")
public class ExplainersController {
	
	@Autowired
	ExplainersService service;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/add-Explainers")
	public String addExplainers(@ModelAttribute ExplainersDTO Explainers) throws IOException {
		System.out.println(Explainers);
		return service.addExplainers(Explainers);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/get-all-Explainers")
	public Page<Explainers> getExplainerss(@RequestParam int pageIndex, @RequestParam int pageSize) {
		Pageable pageable = PageRequest.of(pageIndex, pageSize);
		return service.getAllExplainers(pageable);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/get-Rejected-Explainers")
	public Page<Explainers> getRejectedExplainers(@RequestParam int pageIndex, @RequestParam int pageSize) {
		Pageable pageable = PageRequest.of(pageIndex, pageSize);
		return service.getRejectedExplainers(pageable);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/get-Pending-Explainers")
	public Page<Explainers> getPendingExplainers(@RequestParam int pageIndex, @RequestParam int pageSize) {
		Pageable pageable = PageRequest.of(pageIndex, pageSize);
		return service.getPendingExplainers(pageable);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/get-Explainers/{id}")
	public Explainers getExplainers(@PathVariable String id) {
		return service.getExplainers(id);
	}
	
	@PreAuthorize("hasAuthority('EDIT_SHORT_READS')")
	@PutMapping("/edit-Explainers")
	public String editExplainers(@RequestBody Explainers Explainers) {
		return service.editExplainers(Explainers);
	}
	
	@PreAuthorize("hasAuthority('DELETE_SHORT_READS')")
	@DeleteMapping("/delete-Explainers")
	public String deleteExplainers(@PathVariable String id) {
		return service.deleteExplainers(id);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/rejectExplainers/{id}")
	public String updateRejectStatus(@PathVariable String id, @RequestParam String reason) {
		return service.updateRejectStatus(id, reason);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/acceptExplainers/{id}")
	public String updateAcceptStatus(@PathVariable String id) {
		return service.updateAcceptStatus(id);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/increaseViews/{id}")
	public void increaseViews(@PathVariable String id) {
		service.increaseViews(id);
	}
	
	@GetMapping("/getPopularExplainers")
	public List<Explainers> getPopularArticles() {
		return service.getPopularArticles();
	}

}
