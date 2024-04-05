import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DILComponent } from './dil.component';

describe('DILComponent', () => {
  let component: DILComponent;
  let fixture: ComponentFixture<DILComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DILComponent]
    });
    fixture = TestBed.createComponent(DILComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
