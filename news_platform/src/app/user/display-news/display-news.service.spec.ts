import { TestBed } from '@angular/core/testing';

import { DisplayNewsService } from './display-news.service';

describe('DisplayNewsService', () => {
  let service: DisplayNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
