import { TestBed } from '@angular/core/testing';

import { SensationalNewsService } from './sensational-news.service';

describe('SensationalNewsService', () => {
  let service: SensationalNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensationalNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
