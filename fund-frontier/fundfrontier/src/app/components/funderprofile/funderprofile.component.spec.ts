import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunderprofileComponent } from './funderprofile.component';

describe('FunderprofileComponent', () => {
  let component: FunderprofileComponent;
  let fixture: ComponentFixture<FunderprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunderprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunderprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
