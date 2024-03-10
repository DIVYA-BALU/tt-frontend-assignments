import { TestBed } from '@angular/core/testing';

import { CreateNewsService } from '../create-news/create-news.service';

describe('CreateNewsService', () => {
  let service: CreateNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
