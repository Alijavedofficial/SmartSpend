import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExpensedataService } from '../expensedata.service';
import { CalculationsService } from '../calculations.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent implements OnInit {

expenseForm!: FormGroup;
totalExpense: any;
displayedExpenseData: any[] = [];
ExpenseData: any[] = [];
highestExpense: number = 0;

constructor(private fb: FormBuilder,private expensedataservice:ExpensedataService,private calculationService:CalculationsService) {
 this.expenseForm = this.fb.group({
  expenseTitle: [''],
  expenseAmount: [''],
  expenseDate: [''],
  expenseCategory: [''],
  expenseDescription: ['']
 });
 this.ExpenseData = this.expensedataservice.getExpenseData();
 this.calculateTotalExpense();
 this.displayedExpenseData = this.ExpenseData.slice(-4);
}

ngOnInit(): void {{
  this.expensedataservice.TotalExpense = this.calculationService.totalExpense;
  this.calculateHighestExpense();
}}

addExpense() {
  const data = this.expenseForm.value;
  this.expensedataservice.addExpenseData(data);
  this.expenseForm.reset();
  this.calculateTotalExpense();
  this.displayedExpenseData.push(data);
  if(this.displayedExpenseData.length = 4){
    this.displayedExpenseData.pop();
    this.displayedExpenseData.unshift(data);
  }
}

calculateTotalExpense() {
  this.totalExpense = this.calculationService.calculateTotalExpense();
}
calculateHighestExpense() {
  this.highestExpense = this.calculationService.calculateHighestExpense();
}
}
