package com.project.storeadministration.model;

import java.time.LocalDate;

import org.springframework.data.mongodb.core.mapping.DocumentReference;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SectionDetail {
  @DocumentReference(collection = "sections")
  private Section section;
  private LocalDate createdDate;
}
