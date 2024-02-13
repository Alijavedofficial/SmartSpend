import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncomedataService {
public TotalIncome: number = 0;
  
  public displayedIncomeData: any[] = [
    {
      incomeTitle: 'Salary',
      incomeAmount: 9000,
      incomeDate: '2024-01-01',
      incomeCategory: 'Job',
      incomeDescription: 'Monthly salary',
    },
    {
      incomeTitle: 'Freelance Project',
      incomeAmount: 5000,
      incomeDate: '2024-02-15',
      incomeCategory: 'Freelance',
      incomeDescription: 'Web development project',
    },
    {
      incomeTitle: 'Rental Income',
      incomeAmount: 2000,
      incomeDate: '2024-02-15',
      incomeCategory: 'Freelance',
      incomeDescription: 'Web development project',
    },
    {
      incomeTitle: 'Social Media',
      incomeAmount: 6000,
      incomeDate: '2023-03-15',
      incomeCategory: 'Social Media',
      incomeDescription: 'Social Media',
    },
    {
      incomeTitle: 'Shopify',
      incomeAmount: 12000,
      incomeDate: '2023-04-15',
      incomeCategory: 'Shopify',
      incomeDescription: 'Shopify Income',
    },
    {
      incomeTitle: 'Salary',
      incomeAmount: 9000,
      incomeDate: '2023-05-01',
      incomeCategory: 'Job',
      incomeDescription: 'Monthly salary',
    },
    {
      incomeTitle: 'Freelance Project',
      incomeAmount: 5000,
      incomeDate: '2023-06-15',
      incomeCategory: 'Freelance',
      incomeDescription: 'Web development project',
    },
    {
      incomeTitle: 'Social Media',
      incomeAmount: 6000,
      incomeDate: '2023-07-15',
      incomeCategory: 'Social Media',
      incomeDescription: 'Social Media',
    },
    {
      incomeTitle: 'Shopify',
      incomeAmount: 12000,
      incomeDate: '2023-08-15',
      incomeCategory: 'Shopify',
      incomeDescription: 'Shopify Income',
    },
    {
      incomeTitle: 'Salary',
      incomeAmount: 9000,
      incomeDate: '2023-09-01',
      incomeCategory: 'Job',
      incomeDescription: 'Monthly salary',
    },
    {
      incomeTitle: 'Freelance Project',
      incomeAmount: 5000,
      incomeDate: '2023-10-15',
      incomeCategory: 'Freelance',
      incomeDescription: 'Web development project',
    },
    {
      incomeTitle: 'Social Media',
      incomeAmount: 6000,
      incomeDate: '2023-11-15',
      incomeCategory: 'Social Media',
      incomeDescription: 'Social Media',
    },
    {
      incomeTitle: 'Shopify',
      incomeAmount: 12000,
      incomeDate: '2023-12-15',
      incomeCategory: 'Shopify',
      incomeDescription: 'Shopify Income',
    },
  ];
  addIncomeData(data: any) {
    this.displayedIncomeData.push(data);
  }
  deleteIncomeData(index: number) {
     this.displayedIncomeData.splice(index, 1);
  }
  getIncomeData() {
    return this.displayedIncomeData;
  }

  

}
