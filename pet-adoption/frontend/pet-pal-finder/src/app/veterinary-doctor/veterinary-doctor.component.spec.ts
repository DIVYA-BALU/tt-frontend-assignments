import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaryDoctorComponent } from './veterinary-doctor.component';

describe('VeterinaryDoctorComponent', () => {
  let component: VeterinaryDoctorComponent;
  let fixture: ComponentFixture<VeterinaryDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ VeterinaryDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeterinaryDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
