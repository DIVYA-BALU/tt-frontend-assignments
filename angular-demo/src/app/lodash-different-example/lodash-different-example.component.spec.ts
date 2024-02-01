import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodashDifferentExampleComponent } from './lodash-different-example.component';

describe('LodashDifferentExampleComponent', () => {
  let component: LodashDifferentExampleComponent;
  let fixture: ComponentFixture<LodashDifferentExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodashDifferentExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LodashDifferentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
