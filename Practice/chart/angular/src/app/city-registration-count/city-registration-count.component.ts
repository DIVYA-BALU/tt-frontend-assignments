import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import Chart from 'chart.js/auto';
import { CityCount } from '../models/API.models';

@Component({
  selector: 'app-city-registration-count',
  templateUrl: './city-registration-count.component.html',
  styleUrls: ['./city-registration-count.component.scss']
})
export class CityRegistrationCountComponent {
  citywiseUserRegistrationCount: any;
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    console.log("citycountngoninit");

    this.apiService.getCountOfCities().subscribe({
      next: (citywiseUserRegistrationCount) => {
        this.createChart(citywiseUserRegistrationCount)
      }
    })
  }

  createChart(citywiseUserRegistrationCount: CityCount[]) {
    console.log(citywiseUserRegistrationCount);

    const city = citywiseUserRegistrationCount.map(item => item.city);
    const counts = citywiseUserRegistrationCount.map(item => item.count);

    const colors = [
      'darkviolet', 'blue', 'green', 'orange', 'red', 'yellow', 'purple', 'cyan', 'magenta', 'teal',
      'darkblue', 'darkgreen', 'darkorange', 'darkred', 'darkgoldenrod', 'darkturquoise', 'indigo', 'salmon', 'sienna', 'olive',
      'orchid', 'slategray', 'tomato', 'royalblue', 'firebrick', 'limegreen', 'steelblue', 'goldenrod', 'chocolate', 'darkslategray',
      'mediumvioletred', 'seagreen', 'dodgerblue', 'saddlebrown', 'mediumorchid', 'mediumseagreen', 'mediumslateblue', 'indianred', 'mediumaquamarine', 'lightslategray'
    ];
    const backgroundColors = colors.slice(0, counts.length);

    this.citywiseUserRegistrationCount = new Chart("MyChart", {
      type: 'pie',
      data: {
        labels: city,
        datasets: [
          {
            label: "Registration count",
            data: counts,
            backgroundColor: backgroundColors
          } 
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }
}
