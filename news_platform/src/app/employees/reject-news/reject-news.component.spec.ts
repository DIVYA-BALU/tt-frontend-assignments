import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectNewsComponent } from './reject-news.component';

describe('RejectNewsComponent', () => {
  let component: RejectNewsComponent;
  let fixture: ComponentFixture<RejectNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
