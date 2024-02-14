import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ExpensedataService } from '../expensedata.service';
import { IncomedataService } from '../incomedata.service';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrl: './linechart.component.css',
})
export class LinechartComponent implements OnInit {
  lineChart: Highcharts.Chart;
  incomeData: number[] = [];
  expenseData: number[] = [];

  constructor(
    private incomeDataService: IncomedataService,
    private expenseDataService: ExpensedataService
  ) {}

  ngOnInit(): void {
    this.initializeChart();
    this.updateChartData();
  }

  private updateChartData(): void {
    const incomeByMonth: { [key: string]: number } = {};
    const expenseByMonth: { [key: string]: number } = {};

    this.incomeDataService.getIncomeData().forEach((income) => {
      const date = new Date(income.incomeDate);
      const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
      incomeByMonth[monthKey] =
        (incomeByMonth[monthKey] || 0) + income.incomeAmount;
    });
    this.expenseDataService.getExpenseData().forEach((expense) => {
      const date = new Date(expense.expenseDate);
      const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
      expenseByMonth[monthKey] =
        (expenseByMonth[monthKey] || 0) + expense.expenseAmount;
    });

    const allMonths = new Set([
      
      ...Object.keys(expenseByMonth),
    ]);

    const incomeData: number[] = [];
    const expenseData: number[] = [];
    allMonths.forEach((month) => {
      incomeData.push(incomeByMonth[month] || 0);
      expenseData.push(expenseByMonth[month] || 0);
    });

    this.lineChart.update({

      series: [
        {
          type: 'line',
          name: 'Income',
          data: incomeData,
          borderColor: 'green',
          color: '#4663ac',
        },{
          type: 'line',
          name: 'Expenses',
          data: expenseData,
          borderColor: 'red',
          color: '#009bd6',
        },
      ],
    
    }); 
  }

  private initializeChart(): void {
    this.lineChart = Highcharts.chart('container', {
      chart: {
        type: 'line',
      },
      title: {
        text: '',
      },
      credits: {
        enabled: false,
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
      yAxis: {
        title: {
          text: '',
        },
        gridLineWidth: 0,
        lineWidth: 0,
        labels: {
          enabled: false,
        },
      },
      plotOptions: {
        line: {
          lineWidth: 5,
          marker: {
            enabled: false,
          },
          animation: {
            duration: 1500,
          },
          tooltip: {
            headerFormat: '<span style="font-size: 14px; color: #4663ac; font-weight: bold;  justify-content: center;">{point.x}</span><br/>',
            pointFormat: '<span style="font-weight: bold">{series.name}</span>: <span style="font-weight: bold">${point.y}</span><br/>',
          }
        },
      },
      series: [
        {
          name: 'Income',
          data: this.incomeData,
          color: '#4663ac',
        },
        {
          name: 'Expenses',
          data: this.expenseData,
          color: '#009bd6',
        },
      ] as any,
    });
  }
}
