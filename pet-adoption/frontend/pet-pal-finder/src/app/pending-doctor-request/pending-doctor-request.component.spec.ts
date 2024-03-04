import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingDoctorRequestComponent } from './pending-doctor-request.component';

describe('PendingDoctorRequestComponent', () => {
  let component: PendingDoctorRequestComponent;
  let fixture: ComponentFixture<PendingDoctorRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PendingDoctorRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingDoctorRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
