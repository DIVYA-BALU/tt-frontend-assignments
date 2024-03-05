import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaryDoctorProfileComponent } from './veterinary-doctor-profile.component';

describe('VeterinaryDoctorProfileComponent', () => {
  let component: VeterinaryDoctorProfileComponent;
  let fixture: ComponentFixture<VeterinaryDoctorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ VeterinaryDoctorProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeterinaryDoctorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
