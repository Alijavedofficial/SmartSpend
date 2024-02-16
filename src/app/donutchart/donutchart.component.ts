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
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Month is zero-based, so add 1

  // Filter expenses for the current month
  const currentMonthExpenses = this.expensedataservice.getExpenseData().filter(expense => {
    const date = new Date(expense.expenseDate);
    return date.getMonth() + 1 === currentMonth; // Check if expense date is in the current month
  });

  // Calculate total expenses for the current month
  const totalExpenseForMonth = currentMonthExpenses.reduce((total, expense) => {
    return total + expense.expenseAmount;
  }, 0);

  // Create data points for each expense category in the current month
  const expenseData = currentMonthExpenses.map(expense => {
    return {
      name: expense.expenseTitle,
      y: expense.expenseAmount,
      color: this.getRandomColor() // You can define this function to get a random color
    };
  });

  // Update the pie chart with the expenses for the current month
  this.pieChart.update({
    series: [{
      type: 'pie',
      name: 'Expense',
      data: expenseData
    }]
  });
}

getRandomColor():string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
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
        enabled: true,
        format: '{point.percentage:.1f}%',
        distance: -30, // Adjust label position as needed
        style: {
          fontWeight: 'bold',
          color: 'white'
        }
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
