import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ExpensedataService } from '../Services/expensedata.service';
import { IncomedataService } from '../Services/incomedata.service';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit  {
  recentTransactions: any[] = [];
  currentPage = 0;
  selectedFilter: string = ''; 
  searchText: string = '';
constructor(private incomedataservice:IncomedataService,private expensedataservice:ExpensedataService) {}
  ngOnInit(): void {
      this.loadRecentTransactions('newest')
  }

handlePageEvent(PageEvent: PageEvent): void  {
   this.currentPage = PageEvent.pageIndex;
} 

  loadTransactionsWithFilter(filter: string): void {
    this.loadRecentTransactions(filter);
  }

  loadRecentTransactions(filter?: string): void {
    let AllTransactions = [
      ...this.incomedataservice.IncomeData.map((income) => ({ ...income, type: 'Income' })),
      ...this.expensedataservice.ExpenseData.map((expense) => ({ ...expense, type: 'Expense' })),
    ];
  
    
    // Apply filter if provided
    if (filter) {
      switch (filter) {
        case 'highestPrice':
          AllTransactions.sort((a, b) => {
            const highestA = Math.max(a.incomeAmount || 0, a.expenseAmount || 0);
            const highestB = Math.max(b.incomeAmount || 0, b.expenseAmount || 0);
            return highestB - highestA;
          });
          break;
        case 'lowestPrice':
          AllTransactions.sort((a, b) => {
            const lowestA = Math.min(a.incomeAmount || Infinity, a.expenseAmount || Infinity);
            const lowestB = Math.min(b.incomeAmount || Infinity, b.expenseAmount || Infinity);
            return lowestA - lowestB;
          });
          break;
        case 'newest':
          AllTransactions.sort((a, b) => new Date(b.incomeDate || b.expenseDate).getTime() - new Date(a.incomeDate || a.expenseDate).getTime());
          break;
        case 'oldest':
          AllTransactions.sort((a, b) => new Date(a.incomeDate || a.expenseDate).getTime() - new Date(b.incomeDate || b.expenseDate).getTime());
          break;
        default:
          AllTransactions.sort((a, b) => new Date(b.incomeDate || b.expenseDate).getTime() - new Date(a.incomeDate || a.expenseDate).getTime());
          break;
      }
    }
  
    this.recentTransactions = AllTransactions;
  };






  
}
