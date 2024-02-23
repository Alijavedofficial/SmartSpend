import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { ExpensedataService } from '../Services/expensedata.service';

@Component({
  selector: 'app-donutchart',
  templateUrl: './donutchart.component.html',
  styleUrl: './donutchart.component.css'
})
export class DonutchartComponent implements OnInit {
 
  pieChart: Highcharts.Chart;
  expenseData: number[] = [];

  constructor(private expensedataservice: ExpensedataService) {}


ngOnInit(): void {
    this.initializeChart();
    this.updateChartData();
}

updateChartData(): void {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

 
  const currentMonthExpenses = this.expensedataservice.getExpenseData().filter(expense => {
    const date = new Date(expense.expenseDate);
    return date.getMonth() + 1 === currentMonth; 
  });

  
  const totalExpenseForMonth = currentMonthExpenses.reduce((total, expense) => {
    return total + expense.expenseAmount;
  }, 0);

  
  const expenseData = currentMonthExpenses.map(expense => {
    return {
      name: expense.expenseTitle,
      y: expense.expenseAmount,
      color: this.getRandomColor() 
    };
  });

  
  this.pieChart.update({
    series: [{
      type: 'pie',
      name: 'Cost',
      data: expenseData
    }]
  });
}

getRandomColor(): string {
  const baseColor = [0, 155, 214];

  
  const brightness = Math.floor(Math.random() * 50) + 50;


  const hexColor = this.rgbToHex(
    Math.round((baseColor[0] * brightness) / 100),
    Math.round((baseColor[1] * brightness) / 100),
    Math.round((baseColor[2] * brightness) / 100)
  );

  return hexColor;
}

rgbToHex(r: number, g: number, b: number): string {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}



private initializeChart() {
 this.pieChart = Highcharts.chart('piechart', {
  chart: {
    type: 'pie',
    plotShadow: false,
    backgroundColor: 'rgba(0, 0, 0, 0)',
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
        enabled: true,
        format: '{point.percentage:.1f}%',
        distance: -30, 
        style: {
          fontWeight: 'bold',
          color: 'white'
        }
      },
      tooltip: {
        headerFormat: '<div style="background-color:red;"><span style="font-size: 14px; font-weight: bold;color:#4663ac;">{point.key}</span></div><br/>',
       pointFormat: '<span style="font-weight: bold">{series.name}:</span> <span style="font-weight: bold;color:red">${point.y}</span><br/>',
      }
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
