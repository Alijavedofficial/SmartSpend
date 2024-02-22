import { Component, OnInit } from '@angular/core';
import { IncomedataService } from '../incomedata.service';
import { ExpensedataService } from '../expensedata.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit  {
  recentTransactions: any[] = [];
  rowsPerPage = 20;
  currentPage = 1;
constructor(private incomedataservice:IncomedataService,private expensedataservice:ExpensedataService) {}
  ngOnInit(): void {
      this.loadRecentTransactions()
  }

  loadRecentTransactions():void {
  const AllIncomeData = this.incomedataservice.IncomeData;
  const AllExpenseData = this.expensedataservice.ExpenseData;

  const AllTransactions = [
    ...AllIncomeData.map((income) => ({...income,type: 'Income'})),
    ...AllExpenseData.map((expense) => ({...expense,type: 'Expense'})),
  ]

  AllTransactions.sort((a, b) => 
  new Date(b.incomeDate || b.expenseDate).getTime() -
  new Date(a.incomeDate || a.expenseDate).getTime()
  )
this.recentTransactions = AllTransactions;
};

get startIndex(): number {
  return (this.currentPage - 1) * this.rowsPerPage;
}

get endIndex(): number {
  return this.startIndex + this.rowsPerPage;
}

get displayedTransactions(): any[] {
  return this.recentTransactions.slice(this.startIndex, this.endIndex);
}

nextPage(): void {
  if (this.hasNextPage()) {
    this.currentPage++;
  }
}

prevPage(): void {
  if (this.hasPrevPage()) {
    this.currentPage--;
  }
}

hasNextPage(): boolean {
  return this.endIndex < this.recentTransactions.length;
}

hasPrevPage(): boolean {
  return this.startIndex > 0;
}
  
}
