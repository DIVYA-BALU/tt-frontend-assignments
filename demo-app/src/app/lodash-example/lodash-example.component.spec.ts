import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodashExampleComponent } from './lodash-example.component';

describe('LodashExampleComponent', () => {
  let component: LodashExampleComponent;
  let fixture: ComponentFixture<LodashExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodashExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LodashExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
