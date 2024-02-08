import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-expensebarchart',
  templateUrl: './expensebarchart.component.html',
  styleUrl: './expensebarchart.component.css'
})
export class ExpensebarchartComponent {
  expensebarchart = new Chart({
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
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
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
      name: 'Expense',
      data: [1000, 700, 1000, 800, 1200, 1300,800],
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
