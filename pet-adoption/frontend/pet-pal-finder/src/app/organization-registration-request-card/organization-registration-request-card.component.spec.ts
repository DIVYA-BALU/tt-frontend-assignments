import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationRegistrationRequestCardComponent } from './organization-registration-request-card.component';

describe('OrganizationRegistrationRequestCardComponent', () => {
  let component: OrganizationRegistrationRequestCardComponent;
  let fixture: ComponentFixture<OrganizationRegistrationRequestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationRegistrationRequestCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationRegistrationRequestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
