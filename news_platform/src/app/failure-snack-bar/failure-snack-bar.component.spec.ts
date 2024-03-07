import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureSnackBarComponent } from './failure-snack-bar.component';

describe('FailureSnackBarComponent', () => {
  let component: FailureSnackBarComponent;
  let fixture: ComponentFixture<FailureSnackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailureSnackBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FailureSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
