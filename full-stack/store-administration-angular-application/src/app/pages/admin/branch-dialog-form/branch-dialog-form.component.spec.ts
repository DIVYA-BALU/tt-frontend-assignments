import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchDialogFormComponent } from './branch-dialog-form.component';

describe('BranchDialogFormComponent', () => {
  let component: BranchDialogFormComponent;
  let fixture: ComponentFixture<BranchDialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchDialogFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
