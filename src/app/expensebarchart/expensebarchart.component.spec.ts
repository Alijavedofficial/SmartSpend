import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensebarchartComponent } from './expensebarchart.component';

describe('ExpensebarchartComponent', () => {
  let component: ExpensebarchartComponent;
  let fixture: ComponentFixture<ExpensebarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpensebarchartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpensebarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
