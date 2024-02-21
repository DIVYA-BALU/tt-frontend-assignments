import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentCompComponent } from './appointment-comp.component';

describe('AppointmentCompComponent', () => {
  let component: AppointmentCompComponent;
  let fixture: ComponentFixture<AppointmentCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
