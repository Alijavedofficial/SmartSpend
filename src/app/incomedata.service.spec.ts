import { TestBed } from '@angular/core/testing';

import { IncomedataService } from './incomedata.service';

describe('IncomedataService', () => {
  let service: IncomedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
