import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindstudentsComponent } from './findstudents.component';

describe('FindstudentsComponent', () => {
  let component: FindstudentsComponent;
  let fixture: ComponentFixture<FindstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindstudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
