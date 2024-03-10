import { TestBed } from '@angular/core/testing';

import { SavedStoriesService } from './saved-stories.service';

describe('SavedStoriesService', () => {
  let service: SavedStoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedStoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
