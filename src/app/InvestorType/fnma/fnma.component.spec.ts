import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnmaComponent } from './fnma.component';

describe('FnmaComponent', () => {
  let component: FnmaComponent;
  let fixture: ComponentFixture<FnmaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FnmaComponent]
    });
    fixture = TestBed.createComponent(FnmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
