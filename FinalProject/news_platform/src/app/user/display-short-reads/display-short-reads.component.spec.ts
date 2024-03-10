import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayShortReadsComponent } from './display-short-reads.component';

describe('DisplayShortReadsComponent', () => {
  let component: DisplayShortReadsComponent;
  let fixture: ComponentFixture<DisplayShortReadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayShortReadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayShortReadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
