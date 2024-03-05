import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortReadsComponent } from './short-reads.component';

describe('ShortReadsComponent', () => {
  let component: ShortReadsComponent;
  let fixture: ComponentFixture<ShortReadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortReadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortReadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
