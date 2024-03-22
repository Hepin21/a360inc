import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeClosureComponent } from './fore-closure.component';

describe('ForeClosureComponent', () => {
  let component: ForeClosureComponent;
  let fixture: ComponentFixture<ForeClosureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForeClosureComponent]
    });
    fixture = TestBed.createComponent(ForeClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
