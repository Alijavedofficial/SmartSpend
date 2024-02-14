import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ExpensedataService } from '../expensedata.service';
import { IncomedataService } from '../incomedata.service';

@Component({
  selector: 'app-expensebarchart',
  templateUrl: './expensebarchart.component.html',
  styleUrl: './expensebarchart.component.css'
})
export class ExpensebarchartComponent implements OnInit {

  expenseChart:Highcharts.Chart;
  expenseData:number[] = [];

  constructor(private expensedataservice: ExpensedataService){}

  ngOnInit(): void {
      this.initializeChart();
      this.updateChartData();
  }

  updateChartData():void {
    const currentDate = new Date();
    const lastSixMonthsCategories: string[] = [];
    const expenseData: number[] = [];
  
    
    for (let i = 5; i >= 0; i--) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
      lastSixMonthsCategories.push(date.toLocaleString('default', { month: 'short' }));
    }
  
    
    for (let i = 0; i < 6; i++) {
      expenseData.push(0);
    }
  
    
    this.expensedataservice.getExpenseData().forEach(expense => {
      const date = new Date(expense.expenseDate);
      const monthIndex = date.getMonth();
      const monthDiff = (currentDate.getMonth() - monthIndex + 12) % 12;
  
      if (monthDiff < 6) {
        expenseData[monthDiff] += expense.expenseAmount;
      }
    });
  
    lastSixMonthsCategories.reverse();
    this.expenseChart.update({
      xAxis: {
        categories: lastSixMonthsCategories,
        lineWidth: 0,
        labels: {
          style: {
            fontSize: '11px',
            fontWeight: 'semibold',
            color: '#818589',
          }
        },
      },
      series: [{
        type: 'bar',
        name: 'Expense',
        data: expenseData
      }]
    });
  }

  private initializeChart():void {
  this.expenseChart = Highcharts.chart('expensechart', {
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
        categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL','AUG','SEP','OCT','NOV','DEC'],
        lineWidth: 0,
        labels: {
          style: {
            fontSize: '10px', 
            fontWeight: 'semibold',
            color: '#818589',
          }
        },
      },
    plotOptions: {
        bar: {
          pointWidth: 15,
          pointPadding:10, 
          groupPadding: 1,
          borderRadius: 20,
          animation: {
            duration: 1500,
          },
          tooltip: {
            headerFormat: '<span style="font-size: 14px; color: #4663ac; font-weight: bold;  justify-content: center;">{point.x}</span><br/>',
            pointFormat: '<span style="font-weight: bold">{series.name}</span>: <span style="font-weight: bold">${point.y}</span><br/>',
          }
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
      data: this.expenseData,
      color: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0, '#1e90ff'], 
          [1, '#4663ac'], 
        ],
      },
    } as any],
  });
}
}
