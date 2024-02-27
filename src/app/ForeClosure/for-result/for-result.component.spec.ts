import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForResultComponent } from './for-result.component';

describe('ForResultComponent', () => {
  let component: ForResultComponent;
  let fixture: ComponentFixture<ForResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForResultComponent]
    });
    fixture = TestBed.createComponent(ForResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
