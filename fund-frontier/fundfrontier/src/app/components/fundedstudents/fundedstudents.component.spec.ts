import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundedstudentsComponent } from './fundedstudents.component';

describe('FundedstudentsComponent', () => {
  let component: FundedstudentsComponent;
  let fixture: ComponentFixture<FundedstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundedstudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundedstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
