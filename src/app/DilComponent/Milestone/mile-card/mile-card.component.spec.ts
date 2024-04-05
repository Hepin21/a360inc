import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MileCardComponent } from './mile-card.component';

describe('MileCardComponent', () => {
  let component: MileCardComponent;
  let fixture: ComponentFixture<MileCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MileCardComponent]
    });
    fixture = TestBed.createComponent(MileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
