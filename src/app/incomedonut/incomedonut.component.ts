import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { IncomedataService } from '../Services/incomedata.service';
import { retry } from 'rxjs';


@Component({
  selector: 'app-incomedonut',
  templateUrl: './incomedonut.component.html',
  styleUrl: './incomedonut.component.css'
})
export class IncomedonutComponent implements OnInit{
incomeChart: Highcharts.Chart;
incomeData : number[] = []

constructor(private incomeDataService: IncomedataService) { }

ngOnInit(): void {
    this.initializeChart();
    this.updateChartData();
}

updateChartData():void {

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  const currentMonthIncome = this.incomeDataService.getIncomeData().filter(income => {
    const date = new Date(income.incomeDate);
    return date.getMonth() + 1 === currentMonth
  })

const TotalIncomeForMonth = currentMonthIncome.reduce((total,income) => {
  return total + income.incomeAmount;
},0)

  const Incomedata = currentMonthIncome.map(income => {
    return{
      name: income.incomeTitle,
      y:income.incomeAmount,
      color: this.getRandomColor()
    }
  })

  this.incomeChart.update({
    series: [
      {
        type: 'pie',
        name: 'Amount',
        data: Incomedata
      }
    ]
  })
}

getRandomColor(): string {
  const baseColor = [70, 99, 172];

  
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
    this.incomeChart = Highcharts.chart('incomeChart', {
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
   

