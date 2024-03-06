import { TestBed } from '@angular/core/testing';

import { FundsService } from './funds.service';

describe('FundsService', () => {
  let service: FundsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
