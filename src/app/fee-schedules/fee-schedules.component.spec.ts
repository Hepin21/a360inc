import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeSchedulesComponent } from './fee-schedules.component';

describe('FeeSchedulesComponent', () => {
  let component: FeeSchedulesComponent;
  let fixture: ComponentFixture<FeeSchedulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeeSchedulesComponent]
    });
    fixture = TestBed.createComponent(FeeSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
