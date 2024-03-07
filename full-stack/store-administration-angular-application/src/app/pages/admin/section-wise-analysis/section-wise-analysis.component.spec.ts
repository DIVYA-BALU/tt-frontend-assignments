import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWiseAnalysisComponent } from './section-wise-analysis.component';

describe('SectionWiseAnalysisComponent', () => {
  let component: SectionWiseAnalysisComponent;
  let fixture: ComponentFixture<SectionWiseAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionWiseAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionWiseAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
