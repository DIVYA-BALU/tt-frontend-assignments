import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentModeratorHomeComponent } from './content-moderator-home.component';

describe('ContentModeratorHomeComponent', () => {
  let component: ContentModeratorHomeComponent;
  let fixture: ComponentFixture<ContentModeratorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentModeratorHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentModeratorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
