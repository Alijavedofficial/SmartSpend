import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomedonutComponent } from './incomedonut.component';

describe('IncomedonutComponent', () => {
  let component: IncomedonutComponent;
  let fixture: ComponentFixture<IncomedonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncomedonutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncomedonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
