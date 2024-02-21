import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSponsorsComponent } from './about-sponsors.component';

describe('AboutSponsorsComponent', () => {
  let component: AboutSponsorsComponent;
  let fixture: ComponentFixture<AboutSponsorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutSponsorsComponent]
    });
    fixture = TestBed.createComponent(AboutSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
