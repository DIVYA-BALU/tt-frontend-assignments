import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorHeaderComponent } from './instructor-header.component';

describe('InstructorHeaderComponent', () => {
  let component: InstructorHeaderComponent;
  let fixture: ComponentFixture<InstructorHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
