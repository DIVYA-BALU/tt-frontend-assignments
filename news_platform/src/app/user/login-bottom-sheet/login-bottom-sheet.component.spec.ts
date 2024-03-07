import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBottomSheetComponent } from './login-bottom-sheet.component';

describe('LoginBottomSheetComponent', () => {
  let component: LoginBottomSheetComponent;
  let fixture: ComponentFixture<LoginBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginBottomSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
