import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForResultCardComponent } from './for-result-card.component';

describe('ForResultCardComponent', () => {
  let component: ForResultCardComponent;
  let fixture: ComponentFixture<ForResultCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForResultCardComponent]
    });
    fixture = TestBed.createComponent(ForResultCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
