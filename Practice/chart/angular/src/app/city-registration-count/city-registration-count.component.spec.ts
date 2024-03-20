import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityRegistrationCountComponent } from './city-registration-count.component';

describe('CityRegistrationCountComponent', () => {
  let component: CityRegistrationCountComponent;
  let fixture: ComponentFixture<CityRegistrationCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityRegistrationCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityRegistrationCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
