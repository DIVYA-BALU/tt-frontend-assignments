import { TestBed } from '@angular/core/testing';

import { FundersService } from './funders.service';

describe('FundersService', () => {
  let service: FundersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
