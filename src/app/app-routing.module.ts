import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { LoginComponent } from './login/login.component';
import { GoalsComponent } from './goals/goals.component';

const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path:'dashboard', component: DashboardComponent , data: {title: 'Main Dashboard'}},
  {path:'transactions', component: TransactionsComponent, data: {title: 'Transactions'}},
  {path: 'income', component: IncomeComponent, data: {title: 'Incomes'}},
  {path: 'expense', component:ExpenseComponent, data: {title: 'Expenses'}},
  {path: 'signin', component:LoginComponent, data: {title: 'Sign In'}},
  {path: 'goals', component: GoalsComponent, data: {title: 'Financial Goals'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
