import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvCardComponent } from './conv-card.component';

describe('ConvCardComponent', () => {
  let component: ConvCardComponent;
  let fixture: ComponentFixture<ConvCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvCardComponent]
    });
    fixture = TestBed.createComponent(ConvCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
