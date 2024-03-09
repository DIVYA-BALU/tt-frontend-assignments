import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedExplainersComponent } from './rejected-explainers.component';

describe('RejectedExplainersComponent', () => {
  let component: RejectedExplainersComponent;
  let fixture: ComponentFixture<RejectedExplainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedExplainersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedExplainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
