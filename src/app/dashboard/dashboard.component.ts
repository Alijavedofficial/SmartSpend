import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  lineChartData = [
    { data: [1000, 1200, 800, 1500, 2000, 1200, 1800], label: 'Income', borderColor: 'green' },
    { data: [500, 700, 1000, 800, 1200, 1500, 900], label: 'Expenses', borderColor: 'red' },
  ];

  lineChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  lineChartOptions = {
    responsive: true,
  };
  lineChartLegend = true;
  lineChartType = 'line';
  lineChartColors: any[] = [
    { backgroundColor: 'rgba(0, 128, 0, 0.2)', borderColor: 'green' }, // Income
    { backgroundColor: 'rgba(255, 0, 0, 0.2)', borderColor: 'red' }, // Expenses
  ];
 
  ngOnInit(): void {
      
  }
}
