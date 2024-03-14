import { Component } from '@angular/core';
import { PlotlyService } from './service/plotly.service';
import { GetDataService } from './service/get-data.service';
import { CityCount, RegistrationCount } from './models/models';
declare var google: any;
declare const Plotly: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'chart-example';

  chartData = [
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
  ];

  chartOptions = {
    title: 'My Daily Activities',
  };

  chartWidth = 400;
  chartHeight = 300;

  constructor(private plot: PlotlyService, private getData: GetDataService) {}
  array: number[][] = [];

  gmap() {
    google.charts.setOnLoadCallback(this.drawChart());
  }


  ngOnInit(): void {
    let x: number[] = [1, 2, 3, 4, 5];
    let y: number[] = [1, 2, 3, 4, 5];
    this.getData.getCityCount().subscribe({
      next: (val) => {
        this.plot.plotLine('Line Plot', 'plot', x, y, val);
      },
    });

    this.getData.getHourlyLogin().subscribe({
      next: (values) => {
        const labels: string[] = [];
        const chartValues: number[] = [];
        values.map((value) => {
          labels.push(`${value.hour}`);
          chartValues.push(value.count);
        });
        this.drawBarChart(labels,chartValues,'hour-login-activity');
      }
    })

    google.charts.load('current', { packages: ['geochart'] });

    this.getData.getDensity().subscribe({
      next: (val) => {
        console.log(val);

        val.forEach((value) => {
          this.array.push([value.latitude, value.longitude, value.count]);
        });
        
      },
    });

    this.getData.getRegistrationCountByMonth().subscribe({
      next: (values) => {
        const labels: string[] = [];
        const chartValues: number[] = [];
        values.map((value) => {
          labels.push(`${value.month}-${value.year}`);
          chartValues.push(value.count);
        });
        this.drawBarChart(labels,chartValues,'bar');
     
      },
    });
  }

  drawChart() {
    // console.log(...array);

    const data = google.visualization.arrayToDataTable([
      ['Lat', 'Long', 'value'],
      ...this.array,
    ]);

    const options = {
      title: 'My Daily Activities',
    };

    const chart = new google.visualization.GeoChart(
      document.getElementById('pieChart')
    );
    chart.draw(data, options);
  }

  drawBarChart(labels: string[],chartValues: number[],tag:string) {
  

    var data = [
      {
        x: labels,
        y: chartValues,
        type: 'bar',
      },
    ];

    Plotly.newPlot(tag, data);
  }
}
