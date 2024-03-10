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

import com.fullstack.newsplatform.dto.ShortReadsDTO;
import com.fullstack.newsplatform.model.ShortReads;
import com.fullstack.newsplatform.service.ShortReadsService;

@RestController
@RequestMapping("/short-reads")
public class ShortReadsController {

	@Autowired
	ShortReadsService service;

//	@PreAuthorize("hasAuthority('WRITE_SHORT_READS')")
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/add-ShortReads")
	public String addShortReads(@ModelAttribute ShortReadsDTO shortReads) throws IOException {
		System.out.println(shortReads);
		return service.addShortReads(shortReads);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/get-all-ShortReads")
	public Page<ShortReads> getShortReadss(@RequestParam int pageIndex, @RequestParam int pageSize) {
		Pageable pageable = PageRequest.of(pageIndex, pageSize);
		return service.getAllShortReads(pageable);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/get-Rejected-ShortReads")
	public Page<ShortReads> getRejectedShortReads(@RequestParam int pageIndex, @RequestParam int pageSize) {
		Pageable pageable = PageRequest.of(pageIndex, pageSize);
		return service.getRejectedShortReads(pageable);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/get-Pending-ShortReads")
	public Page<ShortReads> getPendingShortReads(@RequestParam int pageIndex, @RequestParam int pageSize) {
		Pageable pageable = PageRequest.of(pageIndex, pageSize);
		return service.getPendingShortReads(pageable);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/get-ShortReads/{id}")
	public ShortReads getShortReads(@PathVariable String id) {
		return service.getShortReads(id);
	}
	
	@PreAuthorize("hasAuthority('EDIT_SHORT_READS')")
	@PutMapping("/edit-ShortReads")
	public String editShortReads(@RequestBody ShortReads ShortReads) {
		return service.editShortReads(ShortReads);
	}
	
	@PreAuthorize("hasAuthority('DELETE_SHORT_READS')")
	@DeleteMapping("/delete-ShortReads")
	public String deleteShortReads(@PathVariable String id) {
		return service.deleteShortReads(id);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/rejectShortReads/{id}")
	public String updateRejectStatus(@PathVariable String id, @RequestParam String reason) {
		return service.updateRejectStatus(id, reason);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/acceptShortReads/{id}")
	public String updateAcceptStatus(@PathVariable String id) {
		return service.updateAcceptStatus(id);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/increaseViews/{id}")
	public void increaseViews(@PathVariable String id) {
		service.increaseViews(id);
	}
	
	@GetMapping("/getPopularShortReads")
	public List<ShortReads> getPopularArticles() {
		return service.getPopularArticles();
	}
}
