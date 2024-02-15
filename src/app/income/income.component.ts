import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IncomedataService } from '../incomedata.service';
import { CalculationsService } from '../calculations.service';
@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent implements OnInit {

incomeForm!: FormGroup;
totalIncome: any;

IncomeData: any[] = [];
highestIncome: number = 0;
showConfirmationIndex: number | null = null;
incomeToDelete: any;
recentIncomes: any[] = [];

constructor(private fb: FormBuilder,private incomedataservice:IncomedataService,private calculationService: CalculationsService) {
  this.incomeForm = this.fb.group({
    incomeTitle: [''],
    incomeAmount: [''],
    incomeDate: [''],
    incomeCategory: [''],
    incomeDescription: ['']
  });
  this.IncomeData = this.incomedataservice.getIncomeData();
  this.calculateTotalIncome();   
  
}

ngOnInit(): void {
    this.incomedataservice.TotalIncome = this.calculationService.totalIncome;
    this.calculateHighestIncome();
    this.defaultDate();
    this.loadRecentIncome();
}

loadRecentIncome(): void {
  const allIncomeData = this.incomedataservice.IncomeData.slice(); 
  
 
  const sortedIncomeData = allIncomeData.sort((a, b) => {
    return new Date(b.incomeDate).getTime() - new Date(a.incomeDate).getTime();
  });

   
  this.recentIncomes = sortedIncomeData.slice(0, 4);
}

private defaultDate() {
  const currentDate = new Date();
  const formattedDate = this.formatDate(currentDate);
  this.incomeForm.get('incomeDate')?.patchValue(formattedDate);
}

confirmDelete(income: any, index: number): void {
  this.showConfirmationIndex = index;
  this.incomeToDelete = income;
}

deleteIncome(): void {
  const index = this.recentIncomes.indexOf(this.incomeToDelete);
  
  if (index !== -1) {
    this.incomedataservice.deleteIncomeData(this.incomeToDelete);
    this.recentIncomes.splice(index, 1);
    
    this.showConfirmationIndex = null; 
   this.calculateTotalIncome();
   this.calculateHighestIncome();
   
  } 
}
cancelDelete(): void {
  this.showConfirmationIndex = null;
}

addIncome() {
  const newIncome = this.incomeForm.value;
  this.incomedataservice.addIncomeData(newIncome);

  this.incomeForm.reset();
  this.calculateTotalIncome();
  this.calculateHighestIncome()
  
  this.recentIncomes.push(newIncome);
  if(this.recentIncomes.length = 4){
  this.recentIncomes.pop();
  this.recentIncomes.unshift(newIncome);
} 
}

calculateTotalIncome() {
  this.totalIncome = this.calculationService.calculateTotalIncome();
}
calculateHighestIncome() {
  this.highestIncome = this.calculationService.calculateHighestIncome()
}

formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
  
}

}
