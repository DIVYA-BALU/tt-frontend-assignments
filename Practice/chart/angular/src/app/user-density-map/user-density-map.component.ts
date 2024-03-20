import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

declare var google: any;

@Component({
  selector: 'app-user-density-map',
  templateUrl: './user-density-map.component.html',
  styleUrls: ['./user-density-map.component.scss']
})
export class UserDensityMapComponent implements OnInit {

  userDensity: number[][] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadGoogleCharts();
  }

  loadGoogleCharts(): void {
    google.charts.load('current', { packages: ['geochart'] });
    google.charts.setOnLoadCallback(() => {
      this.apiService.getUserDensity().subscribe({
        next: (userDensity) => {
          console.log(userDensity);
          
          userDensity.forEach((data) => {
            this.userDensity.push([data.latitude, data.longitude, data.count]);
          });
          this.createMap();
        }
      });
    });
  }

  createMap(): void {
    const data = google.visualization.arrayToDataTable([
      ['Latitude', 'Longitude', 'User Count'],
      ...this.userDensity
    ]);

    const options = {
      region: 'world',
      displayMode: 'markers',
      colorAxis: { colors: ['green', 'blue'] }
    };

    const chart = new google.visualization.GeoChart(document.getElementById('map'));
    chart.draw(data, options);
  }
}
