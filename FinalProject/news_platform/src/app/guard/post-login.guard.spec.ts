import { TestBed } from '@angular/core/testing';

import { PostLoginGuard } from './post-login.guard';

describe('PostLoginGuard', () => {
  let guard: PostLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PostLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
