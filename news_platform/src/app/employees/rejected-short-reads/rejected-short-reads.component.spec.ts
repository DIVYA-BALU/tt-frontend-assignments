import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedShortReadsComponent } from './rejected-short-reads.component';

describe('RejectedShortReadsComponent', () => {
  let component: RejectedShortReadsComponent;
  let fixture: ComponentFixture<RejectedShortReadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedShortReadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedShortReadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
