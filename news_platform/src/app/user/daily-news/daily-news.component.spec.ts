import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyNewsComponent } from './daily-news.component';

describe('DailyNewsComponent', () => {
  let component: DailyNewsComponent;
  let fixture: ComponentFixture<DailyNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
