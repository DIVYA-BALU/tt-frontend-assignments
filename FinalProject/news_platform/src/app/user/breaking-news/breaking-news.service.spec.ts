import { TestBed } from '@angular/core/testing';

import { BreakingNewsService } from './breaking-news.service';

describe('BreakingNewsService', () => {
  let service: BreakingNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreakingNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
