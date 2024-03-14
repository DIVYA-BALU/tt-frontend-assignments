package com.chartexample.chart.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DensityByCordinates {
    Integer count;
    Double latitude;
    Double longitude;
}
