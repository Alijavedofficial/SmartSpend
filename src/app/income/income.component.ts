import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IncomedataService } from '../incomedata.service';


@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent implements OnInit {

incomeForm!: FormGroup;
totalIncome: any;
displayedIncomeData: any[] = [];
IncomeData: any[] = [];

constructor(private fb: FormBuilder,private incomedataservice:IncomedataService) {
  this.incomeForm = this.fb.group({
    incomeTitle: [''],
    incomeAmount: [''],
    incomeDate: [''],
    incomeCategory: [''],
    incomeDescription: ['']
  });
  this.IncomeData = this.incomedataservice.getIncomeData();
  this.calculateTotalIncome();
  this.displayedIncomeData = this.IncomeData.slice(-4);
   
  
}

ngOnInit(): void {
    this.incomedataservice.TotalIncome = this.totalIncome;
}
addIncome() {
  const data = this.incomeForm.value;
  this.incomedataservice.addIncomeData(data);

  this.incomeForm.reset();
  this.calculateTotalIncome();
  this.displayedIncomeData.push(data);
  if(this.displayedIncomeData.length = 4){
  this.displayedIncomeData.pop();
  this.displayedIncomeData.unshift(data);
} 
}

calculateTotalIncome() {
  
  this.totalIncome = this.IncomeData.reduce((total, income) => total + parseInt(income.incomeAmount, 10), 0);
}
}
