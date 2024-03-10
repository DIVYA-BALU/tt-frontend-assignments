import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorycreationComponent } from './storycreation.component';

describe('StorycreationComponent', () => {
  let component: StorycreationComponent;
  let fixture: ComponentFixture<StorycreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorycreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorycreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
