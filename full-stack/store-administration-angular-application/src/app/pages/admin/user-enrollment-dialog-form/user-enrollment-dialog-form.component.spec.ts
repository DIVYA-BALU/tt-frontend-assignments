import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEnrollmentDialogFormComponent } from './user-enrollment-dialog-form.component';

describe('UserEnrollmentDialogFormComponent', () => {
  let component: UserEnrollmentDialogFormComponent;
  let fixture: ComponentFixture<UserEnrollmentDialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEnrollmentDialogFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEnrollmentDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
