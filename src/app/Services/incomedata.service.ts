import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncomedataService {
public TotalIncome: number = 0;
  
  public IncomeData: any[] = [
    {
      incomeTitle: 'Salary',
      incomeAmount: 9000,
      incomeDate: '2024-01-01',
      incomeCategory: 'salary',
      incomeDescription: 'Monthly salary',
    },
    {
      incomeTitle: 'Freelance',
      incomeAmount: 5000,
      incomeDate: '2024-02-01',
      incomeCategory: 'freelance',
      incomeDescription: 'Freelancing Project',
    },
    {
      incomeTitle: 'Salary',
      incomeAmount: 2000,
      incomeDate: '2024-02-02',
      incomeCategory: 'salary',
      incomeDescription: 'Monthly Salary',
    },
    {
      incomeTitle: 'Social Media',
      incomeAmount: 6000,
      incomeDate: '2023-03-15',
      incomeCategory: 'socialmedia',
      incomeDescription: 'Social Media',
    },
    {
      incomeTitle: 'Shopify',
      incomeAmount: 8000,
      incomeDate: '2023-04-15',
      incomeCategory: 'shopify',
      incomeDescription: 'Shopify Income',
    },
    {
      incomeTitle: 'Salary',
      incomeAmount: 9000,
      incomeDate: '2023-05-01',
      incomeCategory: 'salary',
      incomeDescription: 'Monthly salary',
    },
    {
      incomeTitle: 'Freelance Project',
      incomeAmount: 5000,
      incomeDate: '2023-06-15',
      incomeCategory: 'freelance',
      incomeDescription: 'Web development project',
    },
    {
      incomeTitle: 'Social Media',
      incomeAmount: 6000,
      incomeDate: '2023-07-15',
      incomeCategory: 'socialmedia',
      incomeDescription: 'Social Media Income',
    },
    {
      incomeTitle: 'Shopify',
      incomeAmount: 12000,
      incomeDate: '2023-08-15',
      incomeCategory: 'shopify',
      incomeDescription: 'Shopify Income',
    },
    {
      incomeTitle: 'Salary',
      incomeAmount: 9000,
      incomeDate: '2023-09-01',
      incomeCategory: 'salary',
      incomeDescription: 'Monthly salary',
    },
    {
      incomeTitle: 'Freelance Project',
      incomeAmount: 5000,
      incomeDate: '2023-10-15',
      incomeCategory: 'freelance',
      incomeDescription: 'Web development project',
    },
    {
      incomeTitle: 'Social Media',
      incomeAmount: 6000,
      incomeDate: '2023-11-15',
      incomeCategory: 'socialmedia',
      incomeDescription: 'Social Media Income',
    },
    {
      incomeTitle: 'Social Media',
      incomeAmount: 12000,
      incomeDate: '2023-12-15',
      incomeCategory: 'socialmedia',
      incomeDescription: 'Social Media Income',
    },
  ];
  addIncomeData(income: any) {
    this.IncomeData.push(income);
  }
  getIncomeData() {
    return this.IncomeData;
  }


}
