import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { ExpensedataService } from '../expensedata.service';

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
    const expenseByMonth: { [key: string]: number } = {};

    this.expensedataservice.getExpenseData().forEach(expense => {
      const date = new Date(expense.expenseDate);
      const monthKey = `${date.getMonth() + 1}`;
      expenseByMonth[monthKey] = (expenseByMonth[monthKey] || 0) + expense.expenseAmount;
    })

    const allMonths = new Set([
      ...Object.keys(expenseByMonth),
    ])

    const expenseData: number[] = [];
    allMonths.forEach(month => {
      expenseData.push(expenseByMonth[month] || 0);
    })

    this.pieChart.update({
      series: [
        {
          type: 'pie',
          name: 'Expense',
          data: expenseData
        }
      ]
    })
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
      tooltip: {
        headerFormat: '<span style="font-size: 14px; font-weight: bold;color:#4663ac">{point.key}</span><br/>',
       pointFormat: '<span style="font-weight: bold">{series.name}</span>: <span style="font-weight: bold">${point.y}</span><br/>',
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
