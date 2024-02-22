import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpensedataService {
 public TotalExpense: number = 0;
  public ExpenseData: any[]= [
    {
      expenseTitle: 'Rent',
      expenseAmount: 4000,
      expenseDate: '2024-01-01',
      expenseCategory: 'rent',
      expenseDescription: 'Monthly Rent',
    },
    {
      expenseTitle: 'Bills',
      expenseAmount: 2000,
      expenseDate: '2024-01-01',
      expenseCategory: 'bills',
      expenseDescription: 'Monthly Bills',
    },
    {
      expenseTitle: 'Grocery',
      expenseAmount: 1200,
      expenseDate: '2024-02-01',
      expenseCategory: 'grocery',
      expenseDescription: 'Monthly Grocery ',
    },
    {
      expenseTitle: 'Shopping',
      expenseAmount: 2200,
      expenseDate: '2024-02-02',
      expenseCategory: 'shopping',
      expenseDescription: 'Shopping expenses',
    },
    {
      expenseTitle: 'Education',
      expenseAmount: 2300,
      expenseDate: '2024-02-10',
      expenseCategory: 'education',
      expenseDescription: 'Education Expenses',
    },
    {
      expenseTitle: 'Health Care',
      expenseAmount: 1700,
      expenseDate: '2024-02-03',
      expenseCategory: 'health',
      expenseDescription: 'Health Care expenses',
    },
    {
      expenseTitle: 'Shopping',
      expenseAmount: 6200,
      expenseDate: '2023-03-03',
      expenseCategory: 'shopping',
      expenseDescription: 'Shopping all the necessities',
    },
    {
      expenseTitle: 'Grocery',
      expenseAmount: 1600,
      expenseDate: '2023-04-04',
      expenseCategory: 'grocery',
      expenseDescription: 'Monthly grocery  ',
    },
    {
      expenseTitle: 'Education',
      expenseAmount: 3600,
      expenseDate: '2023-04-04',
      expenseCategory: 'education',
      expenseDescription: 'Education Expenses',
    },
    {
      expenseTitle: 'Rent',
      expenseAmount: 5000,
      expenseDate: '2023-05-05',
      expenseCategory: 'rent',
      expenseDescription: 'Monthly Rent',
    },
    {
      expenseTitle: 'Bills',
      expenseAmount: 8100,
      expenseDate: '2023-06-06',
      expenseCategory: 'bills',
      expenseDescription: 'Monthly bills that include electricity, wate',
    },
    {
      expenseTitle: 'Shopping',
      expenseAmount: 3200,
      expenseDate: '2023-07-07',
      expenseCategory: 'shopping',
      expenseDescription: 'Shopping for all the necessities and ',
    },
    {
      expenseTitle: 'Grocery',
      expenseAmount: 1600,
      expenseDate: '2023-08-08',
      expenseCategory: 'grocery',
      expenseDescription: 'Monthly grocery that includes groceries, ',
    },
    {
      expenseTitle: 'Grocery',
      expenseAmount: 5000,
      expenseDate: '2023-08-08',
      expenseCategory: 'grocery',
      expenseDescription: 'Monthly grocery that includes groceries, ',
    },
    {
      expenseTitle: 'Rent',
      expenseAmount: 7000,
      expenseDate: '2023-09-01',
      expenseCategory: 'rent',
      expenseDescription: 'Monthly Rent',
    },
    {
      expenseTitle: 'Bills',
      expenseAmount: 9100,
      expenseDate: '2023-10-15',
      expenseCategory: 'bills',
      expenseDescription: 'Monthly bills that include electricity, water,',
    },
    {
      expenseTitle: 'Shopping',
      expenseAmount: 5200,
      expenseDate: '2023-11-03',
      expenseCategory: 'shopping',
      expenseDescription: 'Shopping for all the necessities and ',
    },
    {
      expenseTitle: 'Grocery',
      expenseAmount: 8600,
      expenseDate: '2023-12-04',
      expenseCategory: 'grocery',
      expenseDescription: 'Monthly grocery that includes groceries, ',
    },
  ];

 addExpenseData(expense: any) {
  this.ExpenseData.push(expense);
 }

 getExpenseData() {
  return this.ExpenseData;
 }

}
