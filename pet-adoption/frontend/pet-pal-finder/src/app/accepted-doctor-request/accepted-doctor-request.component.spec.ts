import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedDoctorRequestComponent } from './accepted-doctor-request.component';

describe('AcceptedDoctorRequestComponent', () => {
  let component: AcceptedDoctorRequestComponent;
  let fixture: ComponentFixture<AcceptedDoctorRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AcceptedDoctorRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedDoctorRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
