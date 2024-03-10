import { TestBed } from '@angular/core/testing';

import { RejectedExplainersService } from './rejected-explainers.service';

describe('RejectedExplainersService', () => {
  let service: RejectedExplainersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RejectedExplainersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
