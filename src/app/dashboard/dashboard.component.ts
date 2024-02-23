import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CountUp, CountUpOptions } from 'countup.js';
import { IncomedataService } from '../Services/incomedata.service';
import { ExpensedataService } from '../Services/expensedata.service';
import { CalculationsService } from '../Services/calculations.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements AfterViewInit, OnInit {
  totalExpense: number = 0;
  totalIncome: number = 0;
  totalBalance: number = 0;
  highestIncome: number = 0;
  highestExpense: number = 0;
  recentIncomes: any[] = [];
  recentExpenses: any[] = [];
  recentTransactions: any[] = [];
  

  constructor(
    private incomedataservice: IncomedataService,
    private calculationService: CalculationsService,
    private expensedataservice: ExpensedataService
  ) {}

  ngOnInit(): void {
    this.calculateTotalExpense();
    this.calculateTotalIncome();
    this.calculateTotalBalance();
    this.calculateHighestIncome();
    this.calculateHighestExpense();
    this.loadRecentData();
  }

  loadRecentData(): void {
    const allIncomeData = this.incomedataservice.IncomeData;
    const allExpenseData = this.expensedataservice.ExpenseData;

    const allTransactions = [
      ...allIncomeData.map((income) => ({ ...income, type: 'Income' })),
      ...allExpenseData.map((expense) => ({ ...expense, type: 'Expense' })),
    ];

    allTransactions.sort(
      (a, b) =>
        new Date(b.incomeDate || b.expenseDate).getTime() -
        new Date(a.incomeDate || a.expenseDate).getTime()
    );

    this.recentTransactions = allTransactions.slice(0, 5);
  }

  calculateTotalExpense() {
    this.totalExpense = this.calculationService.calculateTotalExpense();
  }
  calculateTotalIncome() {
    this.totalIncome = this.calculationService.calculateTotalIncome();
  }
  calculateTotalBalance() {
    this.totalBalance = this.totalIncome - this.totalExpense;
  }
  calculateHighestIncome() {
    this.highestIncome = this.calculationService.calculateHighestIncome();
  }
  calculateHighestExpense() {
    this.highestExpense = this.calculationService.calculateHighestExpense();
  }

  @ViewChild('counter1') counter1Element!: ElementRef;
  @ViewChild('counter2') counter2Element!: ElementRef;
  @ViewChild('counter3') counter3Element!: ElementRef;
  @ViewChild('counter4') counter4Element!: ElementRef;
  @ViewChild('counter5') counter5Element!: ElementRef;

  counter1!: CountUp;
  counter2!: CountUp;
  counter3!: CountUp;
  counter4!: CountUp;
  counter5!: CountUp;

  ngAfterViewInit(): void {
    const options: CountUpOptions = {
      duration: 2,
    };
    this.counter1 = new CountUp(
      this.counter1Element.nativeElement,
      this.totalBalance,
      options
    );
    this.counter2 = new CountUp(
      this.counter2Element.nativeElement,
      this.totalIncome,
      options
    );
    this.counter3 = new CountUp(
      this.counter3Element.nativeElement,
      this.totalExpense,
      options
    );
    this.counter4 = new CountUp(
      this.counter4Element.nativeElement,
      this.highestIncome,
      options
    );
    this.counter5 = new CountUp(
      this.counter5Element.nativeElement,
      this.highestExpense,
      options
    );

    this.counter1.start();
    this.counter2.start();
    this.counter3.start();
    this.counter4.start();
    this.counter5.start();
  }
}
