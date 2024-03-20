import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingDoctorRequestCardComponent } from './pending-doctor-request-card.component';

describe('PendingDoctorRequestCardComponent', () => {
  let component: PendingDoctorRequestCardComponent;
  let fixture: ComponentFixture<PendingDoctorRequestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PendingDoctorRequestCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingDoctorRequestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
