import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupCardComponent } from './lookup-card.component';

describe('LookupCardComponent', () => {
  let component: LookupCardComponent;
  let fixture: ComponentFixture<LookupCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LookupCardComponent]
    });
    fixture = TestBed.createComponent(LookupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
