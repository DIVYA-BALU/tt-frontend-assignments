import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllfundersComponent } from './allfunders.component';

describe('AllfundersComponent', () => {
  let component: AllfundersComponent;
  let fixture: ComponentFixture<AllfundersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllfundersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllfundersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
