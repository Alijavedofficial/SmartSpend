import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncomedataService {
public TotalIncome: number = 0;
  
  private displayedIncomeData: any[] = [
    {
      incomeTitle: 'Salary',
      incomeAmount: 9000,
      incomeDate: '2022-01-01',
      incomeCategory: 'Job',
      incomeDescription: 'Monthly salary',
    },
    {
      incomeTitle: 'Freelance Project',
      incomeAmount: 5000,
      incomeDate: '2022-02-15',
      incomeCategory: 'Freelance',
      incomeDescription: 'Web development project',
    },
    {
      incomeTitle: 'Social Media',
      incomeAmount: 6000,
      incomeDate: '2022-02-15',
      incomeCategory: 'Social Media',
      incomeDescription: 'Social Media',
    },
    {
      incomeTitle: 'Shopify',
      incomeAmount: 12000,
      incomeDate: '2022-02-15',
      incomeCategory: 'Shopify',
      incomeDescription: 'Shopify Income',
    },
  ];
  addIncomeData(data: any) {
    this.displayedIncomeData.push(data);
  }

  getIncomeData() {
    return this.displayedIncomeData;
  }

  

}
