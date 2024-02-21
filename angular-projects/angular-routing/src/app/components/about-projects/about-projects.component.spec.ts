import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProjectsComponent } from './about-projects.component';

describe('AboutProjectsComponent', () => {
  let component: AboutProjectsComponent;
  let fixture: ComponentFixture<AboutProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutProjectsComponent]
    });
    fixture = TestBed.createComponent(AboutProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
