import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecivedAdoptionRequestComponent } from './recived-adoption-request.component';

describe('RecivedAdoptionRequestComponent', () => {
  let component: RecivedAdoptionRequestComponent;
  let fixture: ComponentFixture<RecivedAdoptionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RecivedAdoptionRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecivedAdoptionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
