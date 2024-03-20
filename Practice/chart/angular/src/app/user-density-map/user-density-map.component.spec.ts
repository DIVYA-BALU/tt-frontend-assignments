import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDensityMapComponent } from './user-density-map.component';

describe('UserDensityMapComponent', () => {
  let component: UserDensityMapComponent;
  let fixture: ComponentFixture<UserDensityMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDensityMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDensityMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
