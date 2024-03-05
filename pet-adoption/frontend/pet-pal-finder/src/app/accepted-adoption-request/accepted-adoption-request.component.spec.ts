import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedAdoptionRequestComponent } from './accepted-adoption-request.component';

describe('AcceptedAdoptionRequestComponent', () => {
  let component: AcceptedAdoptionRequestComponent;
  let fixture: ComponentFixture<AcceptedAdoptionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AcceptedAdoptionRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedAdoptionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
