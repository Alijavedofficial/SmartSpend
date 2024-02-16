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
showConfirmationIndex: number | null = null;
expenseToDelete: any;
recentExpenses: any[] = [];

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
 
}

ngOnInit(): void {{
  this.expensedataservice.TotalExpense = this.calculationService.totalExpense;
  this.calculateHighestExpense();
  this.defaultDate();
  this.loadRecentExpense();
}}

loadRecentExpense(): void {
  const allExpenseData = this.expensedataservice.ExpenseData.slice();

  const sortedExpenseData = allExpenseData.sort((a,b) => {
    return new Date(b.expenseDate).getTime() - new Date(a.expenseDate).getTime();
  })

  this.recentExpenses = sortedExpenseData.slice(0,4);
}

defaultDate() {
  const currentDate = new Date();
  const formattedDate = this.formatDate(currentDate);
  this.expenseForm.get('expenseDate')?.patchValue(formattedDate);
}

deleteExpense() {
  const index = this.ExpenseData.indexOf(this.expenseToDelete);
  const index2 = this.recentExpenses.indexOf(this.expenseToDelete);

  if(index !== -1 && index2 !== -1) {
   this.ExpenseData.splice(index,1);
   this.recentExpenses.splice(index2,1);
   this.showConfirmationIndex = null;
   this.calculateTotalExpense();
   this.calculateHighestExpense();
  }
}

confirmDelete(expense:any, index: number): void {
  this.showConfirmationIndex = index;
  this.expenseToDelete = expense;
}

cancelDelete(): void {
  this.showConfirmationIndex = null;
}

addExpense() {
  const newExpense = this.expenseForm.value;
  this.expensedataservice.addExpenseData(newExpense);

  this.expenseForm.reset();
  this.defaultDate();
  this.calculateTotalExpense();
  this.calculateHighestExpense();

  this.ExpenseData.push(newExpense);
  if(this.recentExpenses.length = 4) {
    this.recentExpenses.pop()
    this.recentExpenses.unshift(newExpense);
  }
}

calculateTotalExpense() {
  this.totalExpense = this.calculationService.calculateTotalExpense();
}
calculateHighestExpense() {
  this.highestExpense = this.calculationService.calculateHighestExpense();
}
formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  return `${year}-${month}-${day}`;
  
}
}
