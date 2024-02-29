import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeManagentComponent } from './employee-managent.component';

describe('EmployeeManagentComponent', () => {
  let component: EmployeeManagentComponent;
  let fixture: ComponentFixture<EmployeeManagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeManagentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeManagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
