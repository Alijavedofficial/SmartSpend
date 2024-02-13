import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-donutchart',
  templateUrl: './donutchart.component.html',
  styleUrl: './donutchart.component.css'
})
export class DonutchartComponent implements OnInit {
 
  pieChart: Highcharts.Chart;
  expenseData: number[] = [];



ngOnInit(): void {
    this.initializeChart();
    this.updateChartData();
}

updateChartData(): void {
    
}

private initializeChart() {
 this.pieChart = Highcharts.chart('piechart', {
  chart: {
    type: 'pie',
    plotShadow: false,
    
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      innerSize: '0%',
      borderWidth: 0,
      borderColor: '',
      slicedOffset: 0,
      borderRadius: 0,
      dataLabels: {
        enabled: false,
      },
    },
  },
  title: {
    verticalAlign: 'middle',
    floating: true,
    text: ''
  },
  legend: {
    enabled: false,
  },

  series: [
    {
      type: 'pie',
      data: [
        { name: 'Grocery', y: 200,color:'	#009bd6' },
        { name: 'Transportation', y: 240, color: '#4663ac'},
        { name: 'Rent', y: 1000, color: '#0000FF' },
        { name: 'Electricity Bill', y: 250 ,color:'#007AFF'},
        { name: 'Shopping', y: 500,color:'#00719c' },
      ],
    },
  ],
})}
}
