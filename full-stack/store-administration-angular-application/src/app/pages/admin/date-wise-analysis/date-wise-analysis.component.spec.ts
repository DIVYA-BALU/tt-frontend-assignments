import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateWiseAnalysisComponent } from './date-wise-analysis.component';

describe('DateWiseAnalysisComponent', () => {
  let component: DateWiseAnalysisComponent;
  let fixture: ComponentFixture<DateWiseAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateWiseAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateWiseAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
