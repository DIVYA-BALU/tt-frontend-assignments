package com.project.storeadministration.model;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document("branches")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Branch {
  @Id
  private String _id;
  private String name;
  private List<SectionDetail> sectionDetails;
  private LocalDate createdDate;
  private String location;
}
