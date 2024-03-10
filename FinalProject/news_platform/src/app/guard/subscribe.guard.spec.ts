import { TestBed } from '@angular/core/testing';

import { SubscribeGuard } from './subscribe.guard';

describe('SubscribeGuard', () => {
  let guard: SubscribeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SubscribeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
