import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateadminprofileComponent } from './updateadminprofile.component';

describe('UpdateadminprofileComponent', () => {
  let component: UpdateadminprofileComponent;
  let fixture: ComponentFixture<UpdateadminprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateadminprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateadminprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
