import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestudentprofileComponent } from './updatestudentprofile.component';

describe('UpdatestudentprofileComponent', () => {
  let component: UpdatestudentprofileComponent;
  let fixture: ComponentFixture<UpdatestudentprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatestudentprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatestudentprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
