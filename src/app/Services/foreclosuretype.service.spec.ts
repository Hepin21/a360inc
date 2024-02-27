import { TestBed } from '@angular/core/testing';

import { ForeclosuretypeService } from './foreclosuretype.service';

describe('ForeclosuretypeService', () => {
  let service: ForeclosuretypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForeclosuretypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
