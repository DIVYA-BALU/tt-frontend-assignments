import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecivedDoctorRequestComponent } from './recived-doctor-request.component';

describe('RecivedDoctorRequestComponent', () => {
  let component: RecivedDoctorRequestComponent;
  let fixture: ComponentFixture<RecivedDoctorRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RecivedDoctorRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecivedDoctorRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
