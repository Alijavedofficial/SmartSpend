import { Injectable } from '@angular/core';

import { IncomedataService } from '../Services/incomedata.service';
import { ExpensedataService } from '../Services/expensedata.service';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {

  totalIncome: number = 0;
  totalExpense: number = 0;
  totalBalance: number = 0;
  highestIncome: number = 0;
  highestExpense: number = 0;

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
