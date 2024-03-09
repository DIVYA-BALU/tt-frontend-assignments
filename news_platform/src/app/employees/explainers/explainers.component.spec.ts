import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplainersComponent } from './explainers.component';

describe('ExplainersComponent', () => {
  let component: ExplainersComponent;
  let fixture: ComponentFixture<ExplainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplainersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
