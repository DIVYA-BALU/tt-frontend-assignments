import { Component, OnInit } from '@angular/core';
import { UserEnrollmentDetails } from '../models/API.models';
import { ApiService } from '../service/api.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-user-registration-bar-chart',
  templateUrl: './user-registration-bar-chart.component.html',
  styleUrls: ['./user-registration-bar-chart.component.scss']
})
export class UserRegistrationBarChartComponent implements OnInit{
  userEnrollmentDetails: any;
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getUserEnrollmentdetails().subscribe({
      next: (userEnrollmentDetails) => {
        this.createChart(userEnrollmentDetails)
      }
    })
  }

  createChart(userEnrollmentDetails: UserEnrollmentDetails[]) {
    console.log(userEnrollmentDetails);
    
    const monthYear = userEnrollmentDetails.map(item => `${item.year}-${item.month}`);
    const counts = userEnrollmentDetails.map(item => item.count);

    this.userEnrollmentDetails = new Chart("BarChart", {
        type: 'bar',
        data: {
            labels: monthYear,
            datasets : [
                {
                    label: "Registration count",
                    data: counts,
                    backgroundColor: 'darkviolet'
                }
            ]
        },
        options: {
            aspectRatio: 2.5
        }
    });
  }

}
