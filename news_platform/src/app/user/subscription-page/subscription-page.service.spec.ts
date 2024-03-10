import { TestBed } from '@angular/core/testing';

import { SubscriptionPageService } from './subscription-page.service';

describe('SubscriptionPageService', () => {
  let service: SubscriptionPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscriptionPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
