import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensationalNewsComponent } from './sensational-news.component';

describe('SensationalNewsComponent', () => {
  let component: SensationalNewsComponent;
  let fixture: ComponentFixture<SensationalNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensationalNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensationalNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
