import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExplainersComponent } from './create-explainers.component';

describe('CreateExplainersComponent', () => {
  let component: CreateExplainersComponent;
  let fixture: ComponentFixture<CreateExplainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExplainersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateExplainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
