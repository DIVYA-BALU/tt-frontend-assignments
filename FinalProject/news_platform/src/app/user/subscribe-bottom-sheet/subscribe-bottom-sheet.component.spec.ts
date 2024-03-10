import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeBottomSheetComponent } from './subscribe-bottom-sheet.component';

describe('SubscribeBottomSheetComponent', () => {
  let component: SubscribeBottomSheetComponent;
  let fixture: ComponentFixture<SubscribeBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeBottomSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
