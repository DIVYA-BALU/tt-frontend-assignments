import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodashdemoComponent } from './lodashdemo.component';

describe('LodashdemoComponent', () => {
  let component: LodashdemoComponent;
  let fixture: ComponentFixture<LodashdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodashdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LodashdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
