import { Component, OnInit } from '@angular/core';
import { IncomedataService } from '../incomedata.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrl: './barchart.component.css'
})
export class BarchartComponent implements OnInit {

  barChart:Highcharts.Chart;
  incomeData:number[] = [];

  constructor(private incomedataservice:IncomedataService){}

  ngOnInit(): void {
      this.initializeChart();
      this.updateChartData();
  }

  updateChartData():void {
      const incomeByMonth: {[key: string]: number} = {};

      this.incomedataservice.getIncomeData().forEach(income => {
        const date = new Date(income.incomeDate);
        const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
        incomeByMonth[monthKey] = (incomeByMonth[monthKey] || 0) + income.incomeAmount;
      })

      const allMonths = new Set([
        ...Object.keys(incomeByMonth)
      ])

      const incomeData: number[] = [];
      allMonths.forEach(month => {
        incomeData.push(incomeByMonth[month] || 0);
      })

      this.barChart.update({
        series:[
          {
            type:'bar',
            name:'Income',
            data:incomeData
          }
        ]
      })
  }


private initializeChart():void {
  this.barChart = Highcharts.chart('barcontainer', {
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
        pointPadding: 5.3, 
        groupPadding: 5,
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
      name: 'INCOME',
      data: this.incomeData,
      color: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0, '#4663ac'], 
          [1, '#1e90ff'], 
        ],
      },
    } as any],
  });
}
}
