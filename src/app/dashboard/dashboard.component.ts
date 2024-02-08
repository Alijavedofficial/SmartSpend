import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CountUp, CountUpOptions } from 'countup.js';
import { IncomedataService } from '../incomedata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements AfterViewInit,OnInit{
totalIncome: number = 0;

constructor(private incomedataservice:IncomedataService){
}

ngOnInit(): void {
    this.totalIncome = this.incomedataservice.TotalIncome;
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

  counter1Value = 152000;
  counter2Value = 215200;
  counter3Value = 125000;
  counter4Value = 7550;
  counter5Value = 8670;

 ngAfterViewInit(): void {
  const options: CountUpOptions = {
    duration: 2, 
  };
  this.counter1 = new CountUp(this.counter1Element.nativeElement, this.counter1Value, options);
  this.counter2 = new CountUp(this.counter2Element.nativeElement, this.counter2Value, options);
  this.counter3 = new CountUp(this.counter3Element.nativeElement, this.counter3Value, options);
  this.counter4 = new CountUp(this.counter4Element.nativeElement, this.counter4Value, options);
  this.counter5 = new CountUp(this.counter5Element.nativeElement, this.counter5Value, options);

  this.counter1.start();
  this.counter2.start();
  this.counter3.start();
  this.counter4.start();
  this.counter5.start();
 }


}
