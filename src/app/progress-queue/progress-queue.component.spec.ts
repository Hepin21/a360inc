import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressQueueComponent } from './progress-queue.component';

describe('ProgressQueueComponent', () => {
  let component: ProgressQueueComponent;
  let fixture: ComponentFixture<ProgressQueueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressQueueComponent]
    });
    fixture = TestBed.createComponent(ProgressQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
