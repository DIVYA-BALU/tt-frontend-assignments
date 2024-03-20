import { TestBed } from '@angular/core/testing';

import { PostSubscriptionGuard } from './post-subscription.guard';

describe('PostSubscriptionGuard', () => {
  let guard: PostSubscriptionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PostSubscriptionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
