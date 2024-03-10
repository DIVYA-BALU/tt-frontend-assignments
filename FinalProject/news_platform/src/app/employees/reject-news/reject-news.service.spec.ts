import { TestBed } from '@angular/core/testing';

import { RejectNewsService } from './reject-news.service';

describe('RejectNewsService', () => {
  let service: RejectNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RejectNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
