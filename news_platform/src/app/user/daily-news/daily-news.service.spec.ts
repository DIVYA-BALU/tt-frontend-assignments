import { TestBed } from '@angular/core/testing';

import { DailyNewsService } from './daily-news.service';

describe('DailyNewsService', () => {
  let service: DailyNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
