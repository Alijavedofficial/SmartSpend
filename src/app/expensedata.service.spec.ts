import { TestBed } from '@angular/core/testing';

import { ExpensedataService } from './expensedata.service';

describe('ExpensedataService', () => {
  let service: ExpensedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpensedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
