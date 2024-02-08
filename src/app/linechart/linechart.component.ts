import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
   
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrl: './linechart.component.css'
})
export class LinechartComponent {
  lineChart = new Chart({
    chart: {
      type: 'line',
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','July','Aug','Sep'],
      lineWidth: 0,
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
    plotOptions: {
      line: {
        lineWidth:5,
        marker: {
          enabled: false, 
        },
      },
    },
    series: [
    {
      name: 'Income',
      data: [1500, 1200, 800, 1500, 2000, 1200,1100,1000,900],
      borderColor: 'green',
      color:'#4663ac'
    } as any,
    {
      name: 'Expenses',
      data: [1000, 700, 1000, 800, 1200, 1500,800,700,1000],
      borderColor:'red',
      color:'#009bd6'
    }
      
    ],
    
  });
  
  
 
}
