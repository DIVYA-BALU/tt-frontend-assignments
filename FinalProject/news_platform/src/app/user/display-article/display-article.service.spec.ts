import { TestBed } from '@angular/core/testing';

import { DisplayArticleService } from './display-article.service';

describe('DisplayArticleService', () => {
  let service: DisplayArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
