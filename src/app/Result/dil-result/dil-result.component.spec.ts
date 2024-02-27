import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DilResultComponent } from './dil-result.component';

describe('DilResultComponent', () => {
  let component: DilResultComponent;
  let fixture: ComponentFixture<DilResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DilResultComponent]
    });
    fixture = TestBed.createComponent(DilResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
