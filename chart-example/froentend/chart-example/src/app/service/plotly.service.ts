import { Injectable } from '@angular/core';
import { CityCount } from '../models/models';
declare let Plotly: any;
@Injectable({
  providedIn: 'root'
})
export class PlotlyService {
constructor() { }
plotLine(title: string, plotDiv: string, x:number[], y:number[], city:CityCount[]){           
    let trace = {
      x: x,    
      y: y,   
      type: 'scatter'   
    };
                  
    // let layout = {
    //   title:title
    // };
    
    // Plotly.newPlot(plotDiv, [trace], layout);  
    const counts: number[] = []
    const cities: string[] = []
    city.map((val) => {
      counts.push(val.count)
      cities.push(val.city)
    })
    var data = [{
      values: counts,
      labels: cities,
      type: 'pie',
      textinfo: 'none'
    }];
    
    var layout = {
      height: 400,
      width: 500
    };
    
    Plotly.newPlot(plotDiv, data, layout); 
  }
}