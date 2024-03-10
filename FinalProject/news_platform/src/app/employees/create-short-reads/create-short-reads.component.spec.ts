import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShortReadsComponent } from './create-short-reads.component';

describe('CreateShortReadsComponent', () => {
  let component: CreateShortReadsComponent;
  let fixture: ComponentFixture<CreateShortReadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateShortReadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateShortReadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
