import { TestBed } from '@angular/core/testing';

import { DisplayShortReadsService } from './display-short-reads.service';

describe('DisplayShortReadsService', () => {
  let service: DisplayShortReadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayShortReadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
