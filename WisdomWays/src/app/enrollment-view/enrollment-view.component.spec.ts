import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentViewComponent } from './enrollment-view.component';

describe('EnrollmentViewComponent', () => {
  let component: EnrollmentViewComponent;
  let fixture: ComponentFixture<EnrollmentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollmentViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
