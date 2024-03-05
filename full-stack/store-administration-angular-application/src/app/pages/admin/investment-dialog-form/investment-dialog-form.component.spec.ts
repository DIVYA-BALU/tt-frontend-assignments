import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentDialogFormComponent } from './investment-dialog-form.component';

describe('InvestmentDialogFormComponent', () => {
  let component: InvestmentDialogFormComponent;
  let fixture: ComponentFixture<InvestmentDialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentDialogFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
