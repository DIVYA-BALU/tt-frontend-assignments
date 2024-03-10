import { TestBed } from '@angular/core/testing';

import { RejectedShortReadsService } from './rejected-short-reads.service';

describe('RejectedShortReadsService', () => {
  let service: RejectedShortReadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RejectedShortReadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
