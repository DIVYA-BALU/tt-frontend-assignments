import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefunderprofileComponent } from './updatefunderprofile.component';

describe('UpdatefunderprofileComponent', () => {
  let component: UpdatefunderprofileComponent;
  let fixture: ComponentFixture<UpdatefunderprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatefunderprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatefunderprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
