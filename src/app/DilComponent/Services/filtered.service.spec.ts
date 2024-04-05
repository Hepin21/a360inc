import { TestBed } from '@angular/core/testing';

import { FilteredService } from './filtered.service';

describe('FilteredService', () => {
  let service: FilteredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilteredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
