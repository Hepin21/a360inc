import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConventionalComponent } from './conventional.component';

describe('ConventionalComponent', () => {
  let component: ConventionalComponent;
  let fixture: ComponentFixture<ConventionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConventionalComponent]
    });
    fixture = TestBed.createComponent(ConventionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
