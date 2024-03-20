import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationBarChartComponent } from './user-registration-bar-chart.component';

describe('UserRegistrationBarChartComponent', () => {
  let component: UserRegistrationBarChartComponent;
  let fixture: ComponentFixture<UserRegistrationBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistrationBarChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegistrationBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
