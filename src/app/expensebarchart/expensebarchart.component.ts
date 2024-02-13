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
      const expenseByMonth: {[key: string]: number} = {};

      this.expensedataservice.getExpenseData().forEach(expense => {
        const date = new Date(expense.expenseDate);
        const monthKey = `${date.getFullYear()/2}-${date.getMonth() + 1}`;
        expenseByMonth[monthKey] = (expenseByMonth[monthKey] || 0) + expense.expenseAmount;
      })

      const allMonths = new Set([
        ...Object.keys(expenseByMonth)
      ])

      const expenseData: number[] = [];
      allMonths.forEach(month => {
        expenseData.push(expenseByMonth[month] || 0);
      })

      this.expenseChart.update({
        series:[
          {
            type:'bar',
            name:'Expense',
            data: expenseData
          }
        ]
      })
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
            fontSize: '9px', 
            fontWeight: 'semibold',
            color: '#818589',
          }
        },
      },
    plotOptions: {
        bar: {
          pointWidth: 13,
          pointPadding:10, 
          groupPadding: 1,
          borderRadius: 20,
          animation: {
            duration: 1500,
          },
          tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: ${point.y}',
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
