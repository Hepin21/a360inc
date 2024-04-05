import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MileStoneComponent } from './mile-stone.component';

describe('MileStoneComponent', () => {
  let component: MileStoneComponent;
  let fixture: ComponentFixture<MileStoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MileStoneComponent]
    });
    fixture = TestBed.createComponent(MileStoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
