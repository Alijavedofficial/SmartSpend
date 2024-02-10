import { Injectable } from '@angular/core';
import { ExpenseComponent } from './expense/expense.component';
import { ExpensedataService } from './expensedata.service';
import { IncomedataService } from './incomedata.service';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {

  totalIncome: number = 0;
  totalExpense: number = 0;
  totalBalance: number = 0;
  highestIncome: number = 0;
  highestExpense: number = 0;

  calculateTotals(incomes: number[], expenses: number[]): void {
    this.totalIncome = incomes.reduce((acc, curr) => acc + curr, 0);
    this.totalExpense = expenses.reduce((acc, curr) => acc + curr, 0);
    this.totalBalance = this.totalIncome - this.totalExpense;
    this.highestIncome = Math.max(...incomes);
    this.highestExpense = Math.max(...expenses);
  }

  constructor(private expensedataservice: ExpensedataService,private incomedataservice: IncomedataService) { }

  calculateTotalExpense(): number {
    const expenseData = this.expensedataservice.getExpenseData();
    return expenseData.reduce((total, expense) => total + parseInt(expense.expenseAmount, 10), 0);
  }
  calculateTotalIncome(): number {
    const incomeData = this.incomedataservice.getIncomeData();
    return incomeData.reduce((total, income) => total + parseInt(income.incomeAmount, 10), 0);
  }
  calculateHighestIncome():number {
    const incomeData = this.incomedataservice.getIncomeData();
    if (incomeData.length === 0) return 0;
    return Math.max(...incomeData.map(income => parseInt(income.incomeAmount, 10)));
  }
  calculateHighestExpense(): number {
    const expenseData = this.expensedataservice.getExpenseData();
    if (expenseData.length === 0) return 0;
    return Math.max(...expenseData.map(expense => parseInt(expense.expenseAmount, 10)));
  }
}
