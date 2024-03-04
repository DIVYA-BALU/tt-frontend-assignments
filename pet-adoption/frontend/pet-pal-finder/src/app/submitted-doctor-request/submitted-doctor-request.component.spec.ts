import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedDoctorRequestComponent } from './submitted-doctor-request.component';

describe('SubmittedDoctorRequestComponent', () => {
  let component: SubmittedDoctorRequestComponent;
  let fixture: ComponentFixture<SubmittedDoctorRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SubmittedDoctorRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmittedDoctorRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
