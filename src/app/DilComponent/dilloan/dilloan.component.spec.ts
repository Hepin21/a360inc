import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DILLoanComponent } from './dilloan.component';

describe('DILLoanComponent', () => {
  let component: DILLoanComponent;
  let fixture: ComponentFixture<DILLoanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DILLoanComponent]
    });
    fixture = TestBed.createComponent(DILLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
