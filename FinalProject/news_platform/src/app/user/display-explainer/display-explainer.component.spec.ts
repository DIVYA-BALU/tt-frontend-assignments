import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayExplainerComponent } from './display-explainer.component';

describe('DisplayExplainerComponent', () => {
  let component: DisplayExplainerComponent;
  let fixture: ComponentFixture<DisplayExplainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayExplainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayExplainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
