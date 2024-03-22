import { TestBed } from '@angular/core/testing';

import { DilLoanTypeService } from './dil-loan-type.service';

describe('DilLoanTypeService', () => {
  let service: DilLoanTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DilLoanTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
