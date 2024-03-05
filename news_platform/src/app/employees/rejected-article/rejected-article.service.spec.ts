import { TestBed } from '@angular/core/testing';

import { RejectedArticleService } from './rejected-article.service';

describe('RejectedArticleService', () => {
  let service: RejectedArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RejectedArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
