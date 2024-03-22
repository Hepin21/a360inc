import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DilCardComponent } from './dil-card.component';

describe('DilCardComponent', () => {
  let component: DilCardComponent;
  let fixture: ComponentFixture<DilCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DilCardComponent]
    });
    fixture = TestBed.createComponent(DilCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
