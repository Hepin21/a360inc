import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeTypeComponent } from './fore-type.component';

describe('ForeTypeComponent', () => {
  let component: ForeTypeComponent;
  let fixture: ComponentFixture<ForeTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForeTypeComponent]
    });
    fixture = TestBed.createComponent(ForeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
