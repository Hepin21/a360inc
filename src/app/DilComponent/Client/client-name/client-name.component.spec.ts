import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientNameComponent } from './client-name.component';

describe('ClientNameComponent', () => {
  let component: ClientNameComponent;
  let fixture: ComponentFixture<ClientNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientNameComponent]
    });
    fixture = TestBed.createComponent(ClientNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
