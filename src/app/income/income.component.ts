import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IncomedataService } from '../Services/incomedata.service';
import { ExpensedataService } from '../Services/expensedata.service';
import { CalculationsService } from '../Services/calculations.service';
@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrl: './income.component.css',
})
export class IncomeComponent implements OnInit {
  incomeForm!: FormGroup;
  totalIncome: any;
  IncomeData: any[] = [];
  highestIncome: number = 0;
  showConfirmationIndex: number | null = null;
  incomeToDelete: any;
  recentIncomes: any[] = [];
  selectedCategory: string;

  constructor(
    private fb: FormBuilder,
    private incomedataservice: IncomedataService,
    private calculationService: CalculationsService
  ) {
    this.incomeForm = this.fb.group({
      incomeTitle: [''],
      incomeAmount: [''],
      incomeDate: [''],
      incomeCategory: [''],
      incomeDescription: [''],
    });
    this.IncomeData = this.incomedataservice.getIncomeData();
    this.calculateTotalIncome();
  }

  ngOnInit(): void {
    this.incomedataservice.TotalIncome = this.calculationService.totalIncome;
    this.calculateHighestIncome();
    this.defaultDate();
    this.loadRecentIncome();
  }

  loadRecentIncome(): void {
    const allIncomeData = this.incomedataservice.IncomeData.slice();

    const sortedIncomeData = allIncomeData.sort((a, b) => {
      return (
        new Date(b.incomeDate).getTime() - new Date(a.incomeDate).getTime()
      );
    });

    this.recentIncomes = sortedIncomeData.slice(0, 4);
  }

  private defaultDate() {
    const currentDate = new Date();
    const formattedDate = this.formatDate(currentDate);
    this.incomeForm.get('incomeDate')?.patchValue(formattedDate);
  }

  confirmDelete(income: any, index: number): void {
    this.showConfirmationIndex = index;
    this.incomeToDelete = income;
  }

  deleteIncome(): void {
    const index = this.IncomeData.indexOf(this.incomeToDelete);
    const index2 = this.recentIncomes.indexOf(this.incomeToDelete);

    if (index !== -1 && index2 !== -1) {
      this.IncomeData.splice(index, 1); 
      this.recentIncomes.splice(index2, 1); 
      this.showConfirmationIndex = null;
      this.calculateTotalIncome();
      this.calculateHighestIncome();
    }
  }
  cancelDelete(): void {
    this.showConfirmationIndex = null;
  }

  addIncome() {
    const newIncome = this.incomeForm.value;
    this.incomedataservice.addIncomeData(newIncome);

    this.incomeForm.reset();
    this.defaultDate();
    this.calculateTotalIncome();
    this.calculateHighestIncome();

    this.recentIncomes.push(newIncome);
    if ((this.recentIncomes.length = 4)) {
      this.recentIncomes.pop();
      this.recentIncomes.unshift(newIncome);
    }
  }

  calculateTotalIncome() {
    this.totalIncome = this.calculationService.calculateTotalIncome();
  }
  calculateHighestIncome() {
    this.highestIncome = this.calculationService.calculateHighestIncome();
  }

  getCategoryImage(category: string): string | undefined {
    if (category === 'shopify') {
      return '../../assets/Income/shopify_6424098.png';
    } else if (category === 'salary') {
      return '../../assets/Income/dollar_3225621.png';
    } else if (category === 'freelance') {
      return '../../assets/Income/computer_2004580.png';
    } else if (category === 'business') {
      return '../../assets/Income/negotiation_1356001.png';
    } else if (category == 'socialmedia') {
      return '../../assets/Income/social-media_3893024.png';
    } else if (category === 'amazon') {
      return '../../assets/Categories/amazon-icon-41517.png';
    } else if (category === 'other') {
      return '../../assets/Income/salary_1589110.png';
    } else if (category === 'youtube') {
      return '../../assets/Income/youtube_1077046.png';
    } else {
      return undefined;
    }
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
  selectedOption: string;
  options: any[] = [
    { value: 'option1', viewValue: 'Option 1' },
    { value: 'option2', viewValue: 'Option 2' },
    { value: 'option3', viewValue: 'Option 3' }
  ];
}
