import { TestBed } from '@angular/core/testing';

import { UserNewsService } from './user-news.service';

describe('UserNewsService', () => {
  let service: UserNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
