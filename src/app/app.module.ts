import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartModule } from 'angular-highcharts';
import { LinechartComponent } from './linechart/linechart.component';
import { DonutchartComponent } from './donutchart/donutchart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExpensebarchartComponent } from './expensebarchart/expensebarchart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavContainer,MatSidenav,MatSidenavContent,MatSidenavModule } from '@angular/material/sidenav';
import { TruncatePipe } from './Services/truncate.pipe';
import { IncomedonutComponent } from './incomedonut/incomedonut.component';
import { SearchFilterPipePipe } from './Services/search-filter-pipe.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
import { GoalsComponent } from './goals/goals.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TransactionsComponent,
    IncomeComponent,
    ExpenseComponent,
    LinechartComponent,
    DonutchartComponent,
    BarchartComponent,
    ExpensebarchartComponent,
    LoginComponent,
    TruncatePipe,
    IncomedonutComponent,
    SearchFilterPipePipe,
    GoalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    ChartModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatSidenav,
    MatSidenavContent,
    MatSidenavContainer,
    MatPaginatorModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDas8BOaxt0Tl0MVjxrGxAZHwj86lHUweU",
  authDomain: "spendsmart-a7a14.firebaseapp.com",
  projectId: "spendsmart-a7a14",
  storageBucket: "spendsmart-a7a14.appspot.com",
  messagingSenderId: "463978890850",
  appId: "1:463978890850:web:3ca1b02e4a28e22409f33b",
  measurementId: "G-2LSW2JQ04P"
    }),
  
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
