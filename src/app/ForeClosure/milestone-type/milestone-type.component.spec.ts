import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestoneTypeComponent } from './milestone-type.component';

describe('MilestoneTypeComponent', () => {
  let component: MilestoneTypeComponent;
  let fixture: ComponentFixture<MilestoneTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MilestoneTypeComponent]
    });
    fixture = TestBed.createComponent(MilestoneTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
