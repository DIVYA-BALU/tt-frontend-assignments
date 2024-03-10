import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedStoriesComponent } from './saved-stories.component';

describe('SavedStoriesComponent', () => {
  let component: SavedStoriesComponent;
  let fixture: ComponentFixture<SavedStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedStoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
