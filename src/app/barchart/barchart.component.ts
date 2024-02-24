import { Component, OnInit } from '@angular/core';
import { IncomedataService } from '../Services/incomedata.service';

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
    const currentDate = new Date();
    const lastSixMonthsCategories: string[] = [];
    const incomeData: number[] = [];
  
    
    for (let i = 7; i >= 0; i--) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
      lastSixMonthsCategories.push(date.toLocaleString('default', { month: 'short' }));
    }
  
    
    for (let i = 0; i < 8; i++) {
      incomeData.push(0);
    }
  
    
    this.incomedataservice.getIncomeData().forEach(income => {
      const date = new Date(income.incomeDate);
      const monthIndex = date.getMonth();
      const monthDiff = (currentDate.getMonth() - monthIndex + 12) % 12;
  
      if (monthDiff < 8) {
        incomeData[monthDiff] += income.incomeAmount;
      }
    });
  
    lastSixMonthsCategories.reverse();

      this.barChart.update({
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
        series:[
          {
            type:'bar',
            name:'Earnings',
            data:incomeData
          }
        ]
      })
  }


private initializeChart():void {
  this.barChart = Highcharts.chart('barcontainer', {
    chart: {
      type: 'column',
      backgroundColor: 'rgba(0, 0, 0, 0)',
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
          headerFormat: '<span style="font-size: 14px; color: #4663ac; font-weight: bold;  justify-content: center;">{point.x}</span><br/>',
          pointFormat: '<span style="font-weight: bold">{series.name}:</span><span style="font-weight: bold;color:green">${point.y}</span><br/>',
         
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
      name: 'Earnings',
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
