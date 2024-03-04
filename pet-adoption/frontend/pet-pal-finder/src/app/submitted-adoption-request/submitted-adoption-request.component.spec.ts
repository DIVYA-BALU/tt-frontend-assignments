import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedAdoptionRequestComponent } from './submitted-adoption-request.component';

describe('SubmittedAdoptionRequestComponent', () => {
  let component: SubmittedAdoptionRequestComponent;
  let fixture: ComponentFixture<SubmittedAdoptionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SubmittedAdoptionRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmittedAdoptionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
