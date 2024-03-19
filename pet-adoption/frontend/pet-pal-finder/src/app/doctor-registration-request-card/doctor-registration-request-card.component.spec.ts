import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRegistrationRequestCardComponent } from './doctor-registration-request-card.component';

describe('DoctorRegistrationRequestCardComponent', () => {
  let component: DoctorRegistrationRequestCardComponent;
  let fixture: ComponentFixture<DoctorRegistrationRequestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorRegistrationRequestCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorRegistrationRequestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
