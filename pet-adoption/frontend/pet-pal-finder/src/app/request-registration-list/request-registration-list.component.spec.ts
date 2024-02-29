import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRegistrationListComponent } from './request-registration-list.component';

describe('RequestRegistrationListComponent', () => {
  let component: RequestRegistrationListComponent;
  let fixture: ComponentFixture<RequestRegistrationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RequestRegistrationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestRegistrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
