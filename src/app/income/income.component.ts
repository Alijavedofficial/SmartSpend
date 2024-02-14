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
displayedIncomeData: any[] = [];
IncomeData: any[] = [];
highestIncome: number = 0;
showConfirmationIndex: number | null = null;
incomeToDelete: any;

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
  this.displayedIncomeData = this.IncomeData.slice(-4);
  
  
}

ngOnInit(): void {
    this.incomedataservice.TotalIncome = this.calculationService.totalIncome;
    this.calculateHighestIncome();
    this.defaultDate();
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
  const index = this.displayedIncomeData.indexOf(this.incomeToDelete);
  
  if (index !== -1) {
    this.displayedIncomeData.splice(index, 1);
    this.IncomeData.splice(index,1)
    this.showConfirmationIndex = null; 
   this.calculateTotalIncome();
   
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
  this.displayedIncomeData.push(newIncome);
  if(this.displayedIncomeData.length = 4){
  this.displayedIncomeData.pop();
  this.displayedIncomeData.unshift(newIncome);
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
