import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaryDoctorRegisterComponent } from './veterinary-doctor-register.component';

describe('VeterinaryDoctorRegisterComponent', () => {
  let component: VeterinaryDoctorRegisterComponent;
  let fixture: ComponentFixture<VeterinaryDoctorRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinaryDoctorRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeterinaryDoctorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
