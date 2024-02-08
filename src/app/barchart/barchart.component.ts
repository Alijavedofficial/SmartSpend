import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrl: './barchart.component.css'
})
export class BarchartComponent {
  barchart = new Chart({
    chart: {
      type: 'column',
    },
    title: {
      text: '',
      
    },
    credits: {
      enabled: false
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
        lineWidth: 0,
      },
      plotOptions: {
       bar: {
        pointWidth: 5,
        pointPadding: 5.3, 
        groupPadding: 5,
        
       }
      },
    yAxis: {
      title: {
        text: '',
      },
      gridLineWidth: 0, 
      lineWidth: 0,
      labels:{
        enabled: false,
      }
    },
    series: [{
      name: 'Income',
      data: [1500, 1200, 800, 1500, 2000, 1200, 1800,2200,1600,1900,2100,1800],
      color: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0, '#5899E2'], 
          [1, '#1e90ff'], 
        ],
      },


         
    } as any],
  });

}
