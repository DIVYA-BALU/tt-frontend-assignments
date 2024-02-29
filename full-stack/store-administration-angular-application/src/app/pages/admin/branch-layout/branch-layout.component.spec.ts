import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchLayoutComponent } from './branch-layout.component';

describe('BranchLayoutComponent', () => {
  let component: BranchLayoutComponent;
  let fixture: ComponentFixture<BranchLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
